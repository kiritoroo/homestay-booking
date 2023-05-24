import React, { useRef, useMemo, useCallback, useState, ChangeEvent, useEffect } from 'react';
import * as S from '@style/page/PersonalInfoPage.styled';
import { Header } from '@comp/Header';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ProfileFieldCard } from '@comp/Card/ProfileFieldCard';
import { IUserUpdateRequestBody } from '@store/user/user.schema';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authSelector } from '@store/user/user.selectors';
import { editingIdAtom } from '@store/app.atoms';
import { useUserActions } from '@store/user/user.actions';
import { Loading } from '@comp/Loading';

export default function PersonalInfoPage() {
  const userActions = useUserActions();
  const [isloading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const { user } = useRecoilValue(authSelector);
  const setEditingId = useSetRecoilState(editingIdAtom);

  const [userUpdateRequest, setUserUpdateRequest] = useState<IUserUpdateRequestBody>({
    full_name: user?.full_name ?? '',
    email: user?.email ?? '',
    phone: user?.phone ?? ''
  })

  const handleInputChange = useCallback((name: string, value: string) => {
    setUserUpdateRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));
  }, [])

  const handleUserUpdate = useCallback(() => {
    userActions.update(userUpdateRequest)
  }, [userUpdateRequest])
  
  const fieldData = useMemo(() => [
    {
      name: "full_name",
      title: "Tên pháp lý",
      hint: "Đây là tên trên giấy tờ thông hành của bạn, có thể là giấy phép hoặc hộ chiếu.",
      emptyHint: "Bắt buộc phải điền tên",
      value: userUpdateRequest.full_name
    },
    {
      name: "email",
      title: "Địa chỉ email",
      hint: "Sử dụng địa chỉ mà bạn luôn có quyền truy cập.",
      emptyHint: "Bắt buộc phải điền địa chỉ email",
      value: userUpdateRequest.email
    },
    {
      name: "phone",
      title: "Số điện thoại",
      hint: "Thêm số điện thoại để khách đã xác nhận và Airute có thể liên hệ với bạn. Bạn có thể thêm các số điện thoại khác và chọn mục đích sử dụng tương ứng.",
      emptyHint: "Bắt buộc phải điền số điện thoại",
      value: userUpdateRequest.phone
    }
  ], [userUpdateRequest])

  const handleAccountNavigate = useCallback(() => {
    navigate('/account');
  }, [])

  useEffect(() => {
    setEditingId(null);
  }, [])

  const renderedFieldList = useMemo<JSX.Element[]>(() => (
    fieldData.map((item) => (
      <ProfileFieldCard
        key={ item.name }
        name={ item.name }
        title={ item.title }
        hint={ item.hint }
        emptyHint={ item.emptyHint }
        value={ item.value }
        onChange={ handleInputChange }
        onSave={ handleUserUpdate }/>
    ))
  ), [fieldData])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, ((300)));
  }, [])

  return (
    <S.StyledContainer>
      <Header/>

      {isloading 
      ? (
      <S.StyledContentWrapper style={{ height: isloading ? "80vh" : "auto" }}>
        <Loading size={12}/>
      </S.StyledContentWrapper>)
      : (
      <S.StyledContentWrapper>
        <S.StyledHeadWrapper>
          <S.StyledNavigateWrapper>
            <S.StyledLinkBefore 
              onClick={ handleAccountNavigate }>
              Tài khoản
            </S.StyledLinkBefore>
            <MdOutlineNavigateNext size={"20px"}/>
            <S.StyledLinkCurrent>Thông tin cá nhân</S.StyledLinkCurrent>
          </S.StyledNavigateWrapper>
          <S.StyledTitle>Thông tin cá nhân</S.StyledTitle>
        </S.StyledHeadWrapper>

        <S.StyledFieldListWrapper>
          { renderedFieldList }
        </S.StyledFieldListWrapper>
      </S.StyledContentWrapper>)}
    </S.StyledContainer>
  )
}