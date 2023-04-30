import React from 'react';
import { Property } from '../../app/(page)/about/components/Property';

export const Experience = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-6 ft-header-02">Experience.</h2>
      <h3 className="mb-3 ft-header-03">
        <a href="https://www.modooshuttle.com/" className="underline">
          주식회사 모두의셔틀
        </a>
      </h3>
      <p className="mb-3 ft-body-02">노선 개설을 희망하는 사용자간 매칭을 통한 맞춤형 모빌리티 스타트업</p>
      <div className="flex flex-col gap-2">
        <Property property="period" value="2023.01.02 - 2023.03.31" />
        <Property property="position" value="프론트엔드 / 인턴" />
        <Property property="work" value="" />
        <li>
          <a href="https://biz.modooshuttle.com/" className="underline ">
            랜딩, 폼 페이지 개발
          </a>
        </li>
        <li className="indent-6">hackle을 이용한 A/B 테스트</li>
        <li className="indent-6">IOS에 대응하는 Layout 모듈화</li>
        <li>카카오맵 API 모듈화</li>
        <li className="indent-6">어드민 경로제작 페이지 개발</li>
        <li className="indent-6">기사 페이지 개발</li>
      </div>
    </div>
  );
};
