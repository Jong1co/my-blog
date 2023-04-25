import React from 'react';

type ContactModalProps = {
  handleModal: () => void;
};

export const ContactModal = ({ handleModal }: ContactModalProps) => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full">
      <div className="absolute z-20 w-full h-full cursor-pointer bg-black/30 backdrop-blur-sm" onClick={handleModal} />
      <form className="absolute z-30 flex flex-col w-11/12 max-w-xl gap-3 p-6 mx-6 align-middle rounded-lg bg-neutral-50 ">
        <div className="w-full mb-2 text-center ft-header-02">Contact Me</div>
        <div>
          <div className="mb-2 align-middle ft-title-01">Your Email</div>
          <input
            placeholder="이메일을 입력해주세요."
            type="email"
            required
            className="w-full px-3 py-3 text-black rounded-md bg-neutral-100 ft-body-01"
          />
        </div>
        <div>
          <div className="mb-2 align-middle ft-title-01">Subject</div>
          <input
            type="text"
            required
            className="w-full px-3 py-3 text-black rounded-md bg-neutral-100 ft-body-01"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div>
          <div className="mb-2 align-middle ft-title-01">Message</div>
          <textarea
            required
            className="w-full h-32 px-3 py-3 text-black border-none rounded-md resize-none bg-neutral-100 ft-body-01 focus:outline-0 focus:ring-0"
            placeholder="내용을 입력해주세요."
          />
        </div>
        <button className="w-full py-4 mt-5 duration-150 ease-in-out rounded-lg bg-primary-50 text-neutral-50 ft-title-01 hover:brightness-75">
          Submit
        </button>
      </form>
    </div>
  );
};
