import { sendContactEmail } from '@/service/contact';
import { EmailData } from '@/service/email';
import { Portal } from '@/_common/components/Portal';
import React, { ChangeEvent, FormEvent, useState } from 'react';

type ContactModalProps = {
  handleModal: () => void;
  success: () => void;
  error: () => void;
};

export const ContactModal = ({ handleModal, success, error }: ContactModalProps) => {
  const [form, setForm] = useState<EmailData>({ from: '', subject: '', message: '' });

  const [loading, setLoading] = useState(false);

  const onChangeForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: keyof EmailData) => {
    setForm((prev) => ({ ...prev, [type]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await setLoading(true);
    await sendContactEmail(form)
      .then(() => {
        handleModal();
        success();
      })
      .catch(error)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Portal selector="#portal">
      <div className="absolute flex items-center justify-center w-full h-full">
        <div className="absolute z-20 w-full h-full cursor-pointer bg-black/30 backdrop-blur-sm" onClick={handleModal} />
        <form
          className="absolute z-30 flex flex-col w-11/12 max-w-xl gap-3 p-6 mx-6 align-middle rounded-lg bg-neutral-50 "
          onSubmit={onSubmit}
        >
          <div className="w-full mb-2 text-center ft-header-02">Contact Me</div>
          <div>
            <div className="mb-2 align-middle ft-title-01">Your Email</div>
            <input
              onChange={(e) => onChangeForm(e, 'from')}
              placeholder="이메일을 입력해주세요."
              type="email"
              required
              className="w-full px-3 py-3 text-black rounded-md bg-neutral-100 ft-body-01"
            />
          </div>
          <div>
            <div className="mb-2 align-middle ft-title-01">Subject</div>
            <input
              onChange={(e) => onChangeForm(e, 'subject')}
              type="text"
              required
              className="w-full px-3 py-3 text-black rounded-md bg-neutral-100 ft-body-01"
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div>
            <div className="mb-2 align-middle ft-title-01">Message</div>
            <textarea
              onChange={(e) => onChangeForm(e, 'message')}
              required
              className="w-full h-32 px-3 py-3 text-black border-none rounded-md resize-none bg-neutral-100 ft-body-01 focus:outline-0 focus:ring-0"
              placeholder="내용을 입력해주세요."
            />
          </div>
          <button
            disabled={loading}
            className={`relative w-full py-4 mt-5 duration-150 ease-in-out rounded-lg ${
              loading ? 'bg-neutral-70' : 'bg-primary-50'
            }  text-neutral-50 ft-title-01 ${!loading && 'hover:brightness-75'}`}
          >
            Submit
          </button>
        </form>
      </div>
    </Portal>
  );
};
