import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  useEffect,
} from "react";
import * as S from "@style/page/HomestayDetailPage.styled";
import { Header } from "@comp/Header";
import { useRecoilValue } from "recoil";
import { useHomestayActions } from "@store/homestay/homestay.actions";
import { useParams } from "react-router-dom";
import { FeedbackCard } from "@comp/Card/FeedbackCard";
import { BsStarFill } from "react-icons/bs";
import {
  IHomestayGetByIDRequestParams,
  IHomestayGetByIDResponse,
} from "@store/homestay/homestay.schema";
import { FeedbackList } from "@comp/List/FeedbackList";
import {
  MdOutlineBed,
  MdSettingsAccessibility,
  MdOutlineBathroom,
  MdOutlineWorkOutline,
  MdOutlineDoorFront,
  MdOutlineNavigateNext,
  MdPets,
  MdWifi,
  MdWorkOutline,
  MdOutlineDeck,
  MdCameraOutdoor,
} from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { BookingModal } from "@comp/Modal/BookingModal";
import { TbCooker } from "react-icons/tb";
import { HomestayDetailSkeleton } from "@comp/Skeleton/HomestayDetail.skeleton";
import { CalendarPick } from "@comp/CalendarPick";

export default function HomestayDetailPage() {
  const { id: homestayId } = useParams();
  const homestayActions = useHomestayActions();
  const [homestayData, setHomestayData] =
    useState<IHomestayGetByIDResponse | null>(null);
  const [isSkeleton, setIsSkeleton] = useState(true);

  const homestayGetByIDRequestParams = useMemo<IHomestayGetByIDRequestParams>(
    () => ({
      page_id: 1,
      page_size: 5,
    }),
    []
  );

  const MAX_DESC_LENGTH = 500;
  const desc = useMemo<string>(() => {
    return homestayData?.homestays[0].homestay.description ?? "";
  }, [homestayData]);

  const truncatedDesc =
    desc.length > MAX_DESC_LENGTH
      ? `${desc.slice(0, desc.lastIndexOf(" ", MAX_DESC_LENGTH))} ...`
      : desc;
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleShowmoreClick = useCallback(() => {
    setShowFullDesc(true);
  }, []);

  const handleHideClick = useCallback(() => {
    setShowFullDesc(false);
  }, []);

  const images = useMemo<string[]>(
    () =>
      homestayData
        ? [
            homestayData.homestays[0].homestay.main_image,
            homestayData.homestays[0].homestay.first_image,
            homestayData.homestays[0].homestay.second_image,
            homestayData.homestays[0].homestay.third_image,
          ]
        : [],
    [homestayData]
  );

  useLayoutEffect(() => {
    homestayActions
      .getByID(homestayId!, homestayGetByIDRequestParams)
      .then((response: IHomestayGetByIDResponse) => {
        setHomestayData(response);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 800);
  }, []);

  return (
    <S.StyledContainer>
      <Header />

      {isSkeleton ? (
        <HomestayDetailSkeleton />
      ) : (
        <S.StyledContentWrapper>
          <S.StyledImageListWrapper>
            <S.StyledMainImage src={images[0]} />
            <S.StyledImageGrid>
              {images.map((url, index) => (
                <S.StyledImage key={index} src={url} />
              ))}
            </S.StyledImageGrid>
          </S.StyledImageListWrapper>

          <S.StyledMidSectionContainer>
            <S.StyledHomestayInfoContainer>
              <S.StyledHomestayBigInfoListWrapper>
                <S.StyledHomestayBigInfoWrapper>
                  <S.StyledIconWrapper>
                    <MdOutlineBed size="30px" />
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    {homestayData?.homestays[0].homestay.number_of_bed} giường
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestayBigInfoWrapper>

                <S.StyledHomestayBigInfoWrapper>
                  <S.StyledIconWrapper>
                    <MdSettingsAccessibility size="30px" />
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    {homestayData?.homestays[0].homestay.capacity} người
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestayBigInfoWrapper>

                <S.StyledHomestayBigInfoWrapper>
                  <S.StyledIconWrapper>
                    <MdOutlineBathroom size="30px" />
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    Phòng vệ sinh chung
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestayBigInfoWrapper>
              </S.StyledHomestayBigInfoListWrapper>

              <S.StyledLine />

              <S.StyledHomestayMediumInfoListWrapper>
                <S.StyledHomestayMediumInfoWrapper>
                  <S.StyledIconWrapper>
                    <HiOutlineHome size="25px" />
                  </S.StyledIconWrapper>
                  <S.StyledHomestayMediumFlexVezWrapper>
                    <S.StyledHomestayInfoTitle>
                      Phòng trong nhà phố
                    </S.StyledHomestayInfoTitle>
                    <S.StyledHomestayInfoDesc>
                      Bạn sẽ có phòng riêng trong một ngôi nhà và được sử dụng
                      những khu vực chung.
                    </S.StyledHomestayInfoDesc>
                  </S.StyledHomestayMediumFlexVezWrapper>
                </S.StyledHomestayMediumInfoWrapper>

                <S.StyledHomestayMediumInfoWrapper>
                  <S.StyledIconWrapper>
                    <MdOutlineWorkOutline size="25px" />
                  </S.StyledIconWrapper>
                  <S.StyledHomestayMediumFlexVezWrapper>
                    <S.StyledHomestayInfoTitle>
                      Không gian riêng để làm việc
                    </S.StyledHomestayInfoTitle>
                    <S.StyledHomestayInfoDesc>
                      Một khu vực chung có Wi-fi, phù hợp để làm việc.
                    </S.StyledHomestayInfoDesc>
                  </S.StyledHomestayMediumFlexVezWrapper>
                </S.StyledHomestayMediumInfoWrapper>

                <S.StyledHomestayMediumInfoWrapper>
                  <S.StyledIconWrapper>
                    <MdOutlineDoorFront size="25px" />
                  </S.StyledIconWrapper>
                  <S.StyledHomestayMediumFlexVezWrapper>
                    <S.StyledHomestayInfoTitle>
                      Tự nhận phòng
                    </S.StyledHomestayInfoTitle>
                    <S.StyledHomestayInfoDesc>
                      Tự nhận phòng bằng cách nhập mã số vào cửa.
                    </S.StyledHomestayInfoDesc>
                  </S.StyledHomestayMediumFlexVezWrapper>
                </S.StyledHomestayMediumInfoWrapper>
              </S.StyledHomestayMediumInfoListWrapper>

              <S.StyledLine />

              <S.StyledHomestayDescContainer>
                <S.StyledHomestayDescLabel>
                  Giới thiệu về chỗ ở này
                </S.StyledHomestayDescLabel>

                {showFullDesc ? (
                  <S.StyledHomestayDescWrapper>
                    <S.StyledHomestayDesc>
                      {" "}
                      {homestayData?.homestays[0].homestay.description}{" "}
                    </S.StyledHomestayDesc>
                    <S.StyledHideWrapper onClick={handleHideClick}>
                      <S.StyledHide> Ẩn bớt</S.StyledHide>
                      <MdOutlineNavigateNext size={"20px"} />
                    </S.StyledHideWrapper>
                  </S.StyledHomestayDescWrapper>
                ) : (
                  <S.StyledHomestayDescWrapper>
                    <S.StyledHomestayDesc>
                      {" "}
                      {truncatedDesc}{" "}
                    </S.StyledHomestayDesc>
                    {truncatedDesc.length > MAX_DESC_LENGTH && (
                      <S.StyledShowmoreWrapper onClick={handleShowmoreClick}>
                        <S.StyledShowmore> Hiển thị thêm</S.StyledShowmore>
                        <MdOutlineNavigateNext size={"20px"} />
                      </S.StyledShowmoreWrapper>
                    )}
                  </S.StyledHomestayDescWrapper>
                )}
              </S.StyledHomestayDescContainer>

              <S.StyledLine />

              <S.StyledHomestayDescLabel style={{ marginTop: 40 }}>
                Nơi này có những gì cho bạn
              </S.StyledHomestayDescLabel>

              <S.StyledHomestaySmallInfoListWrapper>
                <S.StyledHomestaySmallInfoWrapper>
                  <S.StyledIconWrapper>
                    {" "}
                    <TbCooker size="25px" />{" "}
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>Bếp</S.StyledHomestayInfoTitle>
                </S.StyledHomestaySmallInfoWrapper>

                <S.StyledHomestaySmallInfoWrapper>
                  <S.StyledIconWrapper>
                    {" "}
                    <MdWifi size="25px" />{" "}
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    Wi-fi nhanh - 256 Mbps
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestaySmallInfoWrapper>

                <S.StyledHomestaySmallInfoWrapper>
                  <S.StyledIconWrapper>
                    {" "}
                    <MdWorkOutline size="25px" />{" "}
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    Không gian riêng để làm việc
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestaySmallInfoWrapper>

                <S.StyledHomestaySmallInfoWrapper>
                  <S.StyledIconWrapper>
                    {" "}
                    <MdPets size="25px" />{" "}
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    Cho phép thú cưng
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestaySmallInfoWrapper>

                <S.StyledHomestaySmallInfoWrapper>
                  <S.StyledIconWrapper>
                    {" "}
                    <MdOutlineDeck size="25px" />{" "}
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    Sân hiên hoặc ban công riêng
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestaySmallInfoWrapper>

                <S.StyledHomestaySmallInfoWrapper>
                  <S.StyledIconWrapper>
                    {" "}
                    <MdCameraOutdoor size="25px" />{" "}
                  </S.StyledIconWrapper>
                  <S.StyledHomestayInfoTitle>
                    Camera an ninh trong nhà
                  </S.StyledHomestayInfoTitle>
                </S.StyledHomestaySmallInfoWrapper>
              </S.StyledHomestaySmallInfoListWrapper>

              <S.StyledLine />

              <CalendarPick />
            </S.StyledHomestayInfoContainer>

            <BookingModal
              price={
                homestayData ? homestayData.homestays[0].homestay.price : 0
              }
              rating={5}
              feedbackCount={
                homestayData &&
                homestayData.homestays[0].list_of_feedbacks.feedbacks
                  ? homestayData.homestays[0].list_of_feedbacks.feedbacks.length
                  : 0
              }
              maxGuest={
                homestayData ? homestayData.homestays[0].homestay.capacity : 0
              }
              homestay={
                homestayData ? homestayData.homestays[0].homestay : null
              }
            />
          </S.StyledMidSectionContainer>

          <FeedbackList
            feedbacksData={
              homestayData &&
              homestayData.homestays[0].list_of_feedbacks.feedbacks
                ? homestayData.homestays[0].list_of_feedbacks.feedbacks
                : []
            }
          />
        </S.StyledContentWrapper>
      )}
    </S.StyledContainer>
  );
}
