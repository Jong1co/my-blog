# Intro

이번 프로젝트에서 스파게티 코드를 리팩터링 함과 동시에 나름의 추상화를 진행한 경험을 공유하겠습니다.
초보 개발자의 생각이 많이 담긴 글이므로 더 좋은 방법이 많을 수 있습니다..!
피드백 주시면 감사히 받겠습니다 :)

썸네일에서 보시다시피 현재 진행하고 있는 사이드 프로젝트에서 모달이 굉장히 많습니다.
그리고 아래에는 전체가 아닌 하나의 컴포넌트에서만 다뤄지는 모달의 양입니다.

```tsx
{
  openUpdateStatusModal && (
    <TwoButtonModal
      id="fullpayment_side_modal"
      modalHandler={cancelUpdateStatus}
      title="납부여부 변경"
      description="납부여부를 변경하시겠습니까?"
      cancel={{ text: '취소', onClick: cancelUpdateStatus }}
      confirm={{ text: '변경하기', onClick: updateStatus }}
    />
  );
}
{
  openRequestStatusModal && (
    <TwoButtonModal
      id="confirming_side_modal"
      modalHandler={cancelRequestStatus}
      title="납부여부 변경"
      description={`총무에게 확인 요청을 보내시겠습니까? \n 요청 후 변경이 불가능합니다.`}
      cancel={{ text: '취소', onClick: cancelRequestStatus }}
      confirm={{ text: '요청하기', onClick: requestConfirmStatus }}
    />
  );
}
{
  openDeleteDetailModal && (
    <TwoButtonModal
      modalHandler={cancelDeleteDetail}
      title="내역 삭제"
      description={`벌금 내역을 삭제하시겠습니까? \n 삭제된 내역은 복구가 불가능합니다.`}
      cancel={{ text: '취소', onClick: cancelDeleteDetail }}
      confirm={{ text: '삭제하기', onClick: deleteDetailInfo }}
    />
  );
}
{
  openUpdateModal && <FineBookModal eventId={eventId} select={select} setOpen={setOpenUpdateModal} setSelect={setSelect} />;
}
```

모달이 정말 많습니다.. title을 보면 무슨 모달인지 알 수는 있으나, 컴포넌트 이름이 직관적이지가 않습니다. 같은 역할을 하는 모달이 또 존재할 경우, 해당 모달에 텍스트를 하드코딩 해주어야 합니다.

이처럼 리팩터링이 필요한 부분을 아래와 같이 정리했습니다.

---

1. TwoButtonModal의 이름에서 용도를 알 수 없다. (OneButtonModal도 존재함)
2. title, description등이 하드코딩 되어 있어 텍스트가 변하면 일일이 다 찾아서 바꿔야만 한다.
3. useState가 모달마다 필수적으로 한 개씩 사용되어야 한다.

---

세번째 문제는 TwoButtonModal은 다른 컴포넌트와는 다른 특성을 지니고 있으나, FineBookModal과 같은 모달로 여겨진다는 점 입니다. 실제로 보면 FineBookModal다섯가지의 데이터를 다루고 있습니다. 하지만 OneButtonModal, TwoButtonModal은 단순히 확인, 취소만 하는 모달이라는 점입니다. 이걸 좀 더 선언적으로, 조금 더 추상화해서 표현해볼 수는 없을까요?

| ![OneButtonModal](/images/posts/sosim-modal/1.png) | ![TwoButtonModal](/images/posts/sosim-modal/2.png) | ![FineBookModal](/images/posts/sosim-modal/3.png) |
| :------------------------------------------------: | :------------------------------------------------: | :-----------------------------------------------: |
|                   OneButtonModal                   |                   TwoButtonModal                   |                FineBookUpdateModal                |

일단 가벼운 것 부터 시작해 봅시다.

## 1. Modal 이름 변경하기

**TwoButtonModal이란 것이 어떤 모달을 의미하는지 모릅니다.**

버튼이 두개인 모달이라고 밖에 추측할 수가 없죠.
OneButtonModal, TwoButtonModal은 같은 기능을 지니고 있습니다.

바로 확인시키는 기능인 거죠.

TwoButtonModal은 cancel과 confirm 버튼을 가지고 있습니다.
cancel은 모달을 닫는 기능이 포함되어 있고, confirm은 서버에 데이터를 보내는 버튼입니다.

OneButtonModal의 확인 기능은 마치 TwoButtonModal의 cancel기능과 같습니다.

cancel 함수를 전달하지 않는다면 OneButtonModal을,
confirm함수를 전달한다면 TwoButtonModal을 보여주면 되지 않을까요?

이름도 좀 더 명확하게 **ConfirmModal**로 바꾸면 어떨까요? 확인을 하는 모달 나쁘지 않은 거 같습니다. 무엇을 확인할지는 외부에서 주입해 알려주면 될 거 같아요.

아래와 같이 사용하도록 바꿨습니다.

```tsx
//사용하는 곳
{
  openUpdateStatusModal && (
    <ConfirmModal
      modalHandler={cancelUpdateStatus}
      title="납부여부 변경"
      description="납부여부를 변경하시겠습니까?"
      cancel={{ text: '취소', onClick: cancelUpdateStatus }}
      confirm={{ text: '변경하기', onClick: updateStatus }}
    />
  );
}
```

ConfirmModal의 내부 구조 입니다. 이제 OneButtonModal과 TwoButtonModal 두개가 존재하는 것이 아닌 ConfirmModal 단 하나만 존재합니다.

```tsx
//ConfirmModal.tsx
interface Props {
  modalHandler: () => void;
  description: string;
  title: string;
  cancel?: { title: string; onClick: () => void };
  confirm: { title: string; onClick: () => void };
}

export const ConfirmModal = ({ modalHandler, cancel, confirm, width = '448px', id }: Props) => {
  return (
    <Modal.Frame onClick={modalHandler}>
      <Modal.Header>
        <Style.Title>{title}</Style.Title>
      </Modal.Header>
      <Modal.Body>
        <Style.Desc>{description}</Style.Desc>
      </Modal.Body>
      <Modal.Footer>
        {cancel && <Button onClick={cancel.onClick}>{cancel.title}</Button>}
        <Button onClick={confirm}>{confirm.title}</Button>
      </Modal.Footer>
    </Modal.Frame>
  );
};
```

## 2. 텍스트가 변하면 일일이 다 찾아서 바꿔야만 한다.

현재 이 납부여부 변경이란 형태의 모달은 프로젝트 내에 3개가 존재합니다.
만약에 텍스트가 바뀔 일이 없다면 문제가 없지만 더 많아진다면 어떻게 될까요?
귀찮아 질 거 같습니다.. 또한 실수로 바꾸는 것을 빼먹으면 유저한테 그리 좋은 경험은 아닐 것입니다..

이런 경우에는 상수로 빼서 관리하는 편이 좋을 거 같습니다.

```tsx

export const CONFIRM_MODAL = {
  LOGOUT: {
    title: '로그아웃',
    description: '로그아웃 하시겠습니까?',
    cancel: '취소',
    confirm: '로그아웃',
  },
  CHANGE_STATUS: {
    title: '납부여부 변경',
    description: '납부여부를 변경하시겠습니까?',
    cancel: '취소',
    confirm: '변경하기',
  }

  ...

```

파일을 분리하고, 상수값을 넣어줍니다.

```tsx
{
  openUpdateStatusModal && (
    <ConfirmModal
      modalHandler={cancelUpdateStatus}
      title={CHANGE_STATUS.title}
      description={CHANGE_STATUS.description}
      cancel={{ text: CHANGE_STATUS.cancel, onClick: cancelUpdateStatus }}
      confirm={{ text: CHANGE_STATUS.confirm, onClick: updateStatus }}
    />
  );
}
```

이제는 상수값을 따로 빼서 관리하고, 변경이 발생하면 해당 파일로 접근해 수정만 해주면 모든 모달에 올바른 텍스트가 들어갈 것입니다.

그런데 저는 여기에서 마음에 들지 않는 부분이 있었습니다.
바로 CHANGE_STATUS를 네번이나 반복한 것입니다. 뭔가 더 심플하게 바꾸고 싶었습니다.

그래서 저는 아래와 같은 코드로 변경했습니다. 물론 정답은 아니지만
이 전에 비해서 훨씬 더 명료해지지 않았나요? 😁

```tsx
<ConfirmModal modalHandler={cancelUpdateStatus} type="CHANGE_STATUS" cancel={cancelUpdateStatus} confirm={updateStatus} />
```

받아온 type으로 내부에서 CONFIRM_MODAL을 불러오고,
**CONFIRM_MODAL의 key값을 타입으로 지정해 주었습니다. **

```tsx
// Confirm.ts
export type ConfirmModalType = keyof typeof CONFIRM_MODAL;
```

그럼 아래 사진과 같이 추후 사용할 때 타입에 대한 오타를 방지하고,
더 빠르게 알맞은 상수값을 배정할 수 있습니다.
![](/images/posts/sosim-modal/4.png)

```tsx
//ConfirmModal.tsx
import { CONFIRM_MODAL, ConfirmModalType } from '@/constants/Confirm';

interface Props {
  modalHandler: () => void;
  type: ConfirmModalType;
  cancel?: () => void;
  confirm: () => void;
}

export const ConfirmModal = ({ modalHandler, cancel, confirm, width = '448px', id }: Props) => {
  return (
    <Modal.Frame onClick={modalHandler}>
      <Modal.Header>
        <Style.Title>{CONFIRM_MODAL[type].title}</Style.Title>
      </Modal.Header>
      <Modal.Body>
        <Style.Desc>{CONFIRM_MODAL[type].description}</Style.Desc>
      </Modal.Body>
      <Modal.Footer>
        {cancel && <Button onClick={cancel}>{CONFIRM_MODAL[type].cancel}</Button>}
        <Button onClick={confirm}>{CONFIRM_MODAL[type].confirm}</Button>
      </Modal.Footer>
    </Modal.Frame>
  );
};
```

```tsx
//변경 전
{
  openUpdateStatusModal && (
    <TwoButtonModal
      modalHandler={cancelUpdateStatus}
      title="납부여부 변경"
      description="납부여부를 변경하시겠습니까?"
      cancel={{ text: '취소', onClick: cancelUpdateStatus }}
      confirm={{ text: '변경하기', onClick: updateStatus }}
    />
  );
}

//변경 후
{
  openUpdateStatusModal && (
    <ConfirmModal type="CHANGE_STATUS" modalHandler={cancelUpdateStatus} cancel={cancelUpdateStatus} confirm={updateStatus} />
  );
}
```

## 3. 모달마다 존재하는 useState 제거하기

이 무수한 useState가 마음에 들지 않았습니다. 매번 반복되는 useState()
그리고 반복되는 아래와 같은 handle 함수.. 이걸 줄일 수는 없을까요?

```tsx
const handleUpdateModal = () => {
  setOpenUpdateModal((prev) => !prev);
};
```

```tsx
const [openUpdateModal, setOpenUpdateModal] = useState(false);
const [openUpdateStatusModal, setOpenUpdateStatusModal] = useState(false);
const [openRequestStatusModal, setOpenRequestStatusModal] = useState(false);
const [openDeleteDetailModal, setOpenDeleteDetailModal] = useState(false);
```

### useModal로 만들어 보기

useModal이란 hooks를 만들어 봤습니다.
과연 이 문제를 해결해줄 수 있을까요?

```tsx
const useModal = () => {
  const [state, setState] = useState(false);

  const open = () => {
    setState(true);
  };

  const close = () => {
    setState(false);
  };

  const toggle = () => {
    setState((prev) => !prev);
  };

  return { state, open, close, toggle };
};

const { state: openUpdateModal, toggle: handleUpdateModal } = useModal();
```

**물론 코드는 줄었습니다. toggle함수를 직접 구현하지 않아도 되니까 코드 양은 줄겠죠.**

그러나 사실 본질적으로 보면 똑같습니다. useState와 다른 것이 없죠..
좀 더 선언적으로 사용하고 싶어집니다.

그럼 어떻게 하면 될까요? 여기에서 추상화에 들어가 봅니다.
추상화는 복잡한 구현사항을 숨기면서, 사람이 읽고 사용하기 쉽게, 코드를 데이터 관점이 아닌 사람의 관점에서 보는 것이라고 합니다. 무언가 확실하게 와닿는 것은 없습니다.

그래서 저의 관점에서 생각해 봤습니다.

> 저는 납부 여부를 변경했을 때 이 모달이 등장했으면 좋겠습니다.
> 내가 열어라! 하면 모달이 열렸으면 좋겠다는 의미에요.
> 바로 아래 있는 코드처럼 !

```tsx
const openUpdateStatusConfirmModal = () => {
  openConfirmModal({
    type: 'CHANGE_STATUS',
    confirm: updateStatus,
    cancel: cancelUpdateStatus,
  });
};

// 함수 사용할 때
<button onClick={openUpdateStatusConfirmModal}>납부 여부 변경하는 버튼</button>;
```

함수 하나만을 이용해서 모달을 어떻게 열 수 있을까요? useState를 사용하지 않고도 할 수 있을까요?

### useConfirmModal로 만들기

위와 같이 모달을 열려면 세가지 준비물이 필요합니다.

1.  **전역상태관리도구**(recoil, context api, redux, ...)
2.  전역 상태에서의 ConfirmModal 렌더링을 담당해줄 `<GlobalConfirmModal/>`
3.  `useConfirmModal` Hook

흐름은 아래와 같습니다.

1. 전역적으로 type을 관리합니다. (type은 위에 선언했던 ConfirmModalType)
   - type이 null일 경우 모달을 닫습니다.
   - type이 설정되어 있을 경우 해당 모달을 보여줍니다.
2. type이 변경되면 GlobalConfirmModal에서 모달을 렌더링 해줍니다.
3. 모든 모달의 컨트롤은 useConfirmModal을 통해 합니다.

저희 프로젝트에서는 이미 recoil을 사용하고 있었기에, recoil을 사용해서 구현했습니다.
일단 첫번째로 recoil state를 생성합니다.

```tsx
//confirmModalState.ts
export const initialConfirmModalState = {
  type: null,
  confirm: () => {},
  cancel: () => {},
};

export const confirmModalState = atom<ConfirmModalState>({
  key: 'confirmModalState',
  default: initialConfirmModalState,
});
```

전역적으로는 type과 confirm, cancel함수만을 관리합니다.
type이 null일 경우 모달을 닫고, 지정되어 있을 경우 해당 모달을 열어줍니다.

이제 이 전역 상태를 컨트롤할 useConfirmModal을 만들어 줍니다.

```tsx
//useConfirmModal.ts
import { ConfirmModalState, confirmModalState, initialConfirmModalState } from '@/store/confirmModalState';
import { useRecoilState } from 'recoil';

const useConfirmModal = () => {
  const [_, setConfirmModal] = useRecoilState(confirmModalState);

  const openConfirmModal = (confirmModalInfo: ConfirmModalState) => {
    setConfirmModal(confirmModalInfo);
  };

  const closeConfirmModal = () => {
    //초기화 시켜서 type을 null로 바꿈
    setConfirmModal(initialConfirmModalState);
  };

  return { openConfirmModal, closeConfirmModal };
};

export default useConfirmModal;
```

이제 사용하는 부분에서 useConfirmModal만 가져다 쓰기만 하면 됩니다.

마지막으로 전역적으로 ConfirmModal이 그려질 수 있도록 최상위 파일 App에
`<GlobalConfirmModal/>`을 넣어주면 됩니다.

```tsx
export const GlobalConfirmModal = () => {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState);

  const modalHandler = () => {
    setConfirmModal(initialConfirmModalState);
  };

  if (confirmModal.type === null) return null;

  return (
    <ConfirmModal //
      type={confirmModal.type}
      modalHandler={modalHandler}
      cancel={confirmModal.cancel}
      confirm={confirmModal.confirm}
    />
  );
};
```

```tsx
//App.tsx

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalConfirmModal /> 👈 저는 여기에 넣어줬습니다
        <Global styles={globalStyle} />
      </ThemeProvider>
    </RecoilRoot>
  );
};
```

이 과정을 거치면 기존에 맨위에서 보여드렸던 코드는 전부 제거되고, useState또한 제거된 체로
아래의 세 개의 함수를 통해서 조금 더 선언적으로 ConfirmModal을 호출할 수 있게 됩니다.

```tsx
const handleDeleteConfirmModal = () => {
  openConfirmModal({
    type: 'DELETE_DETAIL',
    confirm: deleteDetailInfo,
    cancel: closeConfirmModal,
  });
};

const handleRequestConfirmModal = () => {
  openConfirmModal({
    type: 'REQUEST_CHANGE_STATUS',
    confirm: requestConfirmStatus,
    cancel: closeConfirmModal,
  });
};

const handleUpdateStatusConfirmModal = (newStatus: PaymentType) => {
  openConfirmModal({
    type: 'CHANGE_STATUS',
    confirm: updateStatus,
    cancel: cancelUpdateStatus,
  });
};
```

# 끝으로

> 그래서 우리가 구현한 코드를 반대로 추상화를 하게 될 경우에는 **구현은 요구사항을 데이터의 관점으로 기술하는 것**이라면 데이터의 관점에서 기술된 것을 보다 **사람의 언어에 가까운 코드로 표현 하는 것이 추상화**가 됩니다.

당연한 말이겠지만 테스트를 작성할 때에도 그렇고, 현재 모달을 추상화 할 때도 그렇고,
**행위를 기준으로 코드를 작성할 때** 쉽게 무너지지 않고, 더 이해하기 쉽고, 유지보수에 용이한 코드가 탄생하는 거 같습니다.

### 참고한 자료

- [잘하는 개발자가 되는 그라데이션 사고법 (추상화 계층과 데이터 흐름 이해하기)](https://velog.io/@teo/gradation-thinking)
- [토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code](https://www.youtube.com/watch?v=edWbHp_k_9Y&t=598s)
