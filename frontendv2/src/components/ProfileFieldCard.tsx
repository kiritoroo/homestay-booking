import React, { useCallback, useState, useRef, ChangeEvent, useMemo } from 'react';
import * as S from '@style/comp/ProfileFieldCard.styled';
import { useRecoilState } from 'recoil';
import { editingIdAtom } from '@store/app.atoms';
import { HiExclamationCircle } from 'react-icons/hi';
import { Loading } from './Loading';

interface Props {
  name: string;
  title: string;
  hint: string;
  emptyHint: string;
  value: string;
  onChange: (name: string, value: string) => void;
  onSave: () => void;
}

export const ProfileFieldCard = (props: Props) => {
  const { name, title, hint, emptyHint, value, onChange, onSave } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [editingId, setEditingId] = useRecoilState(editingIdAtom);
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const defaultValue = useMemo<string>(() => value, [value])
  
  const handleModifyClick = useCallback(() => {
    if (editingId && editingId !== name) return;
    
    setIsEditing((prev) => !prev)
    if (isEditing) {
      setEditingId(null)
      onChange(name, defaultValue);
    } else {
      setEditingId(name)
    }
  }, [isEditing, editingId, name])

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setIsInputEmpty(false)
    onChange(name, value)
  }, [])

  const handleSaveMouseClick = useCallback(() => {
    if (inputRef.current) {
      if (!value) {
        setIsInputEmpty(true)
        inputRef.current.focus();
      } else {
        onSave();
        setIsPending(true)

        setTimeout(() => {
          setIsPending(false)
          setIsEditing(false);
          setEditingId(null);
        }, 200)
      }
    }
  }, [inputRef.current, value])

  return (
    <S.StyledContainer
      isEditting={ !editingId ? true : editingId == name ? true : false}>
      <S.StyledFieldWrapper>
        <S.StyledFieldInfo>
          <S.StyledFieldLabel>{ title }</S.StyledFieldLabel>
          <S.StyledFieldValue>{ isEditing ? ( hint ) : ( value ) }</S.StyledFieldValue>
        </S.StyledFieldInfo>
        <S.StyledButtonModify
          isEditting={ !editingId ? true : editingId == name ? true : false}
          onClick={ handleModifyClick }>
          {isEditing ? "Hủy" : "Chỉnh sửa"}
        </S.StyledButtonModify>
      </S.StyledFieldWrapper>

      { isEditing ? (
        <S.StyledInputWrapper>
          <S.StyledInput
            ref={ inputRef }
            isEmpty={ isInputEmpty }
            type='text'
            name={ name }
            required
            value={ value }
            onChange={ handleInputChange }/>
          <S.StyledInputLalbel>{ title }</S.StyledInputLalbel>
        </S.StyledInputWrapper>
      ) : ( null )}

      <S.StyledInputEmptyHintWrapper>
        { isInputEmpty && <HiExclamationCircle size={"20px"} color={"#C13515"}/> }
        { isInputEmpty && <S.StyledInputEmptyHintLabel>{ emptyHint }</S.StyledInputEmptyHintLabel> }
      </S.StyledInputEmptyHintWrapper>

      <S.StyledSaveButtonWrapper>
        { isEditing ? (
          isPending
            ? (
            <S.StyledLoadingWrapper>
              <Loading size={8}/>
            </S.StyledLoadingWrapper>)
            : (
            <S.StyledSaveButton 
              onClick={ handleSaveMouseClick }>
              Lưu
            </S.StyledSaveButton>)
        ) : ( null )}
      </S.StyledSaveButtonWrapper>

    </S.StyledContainer>
  )
}