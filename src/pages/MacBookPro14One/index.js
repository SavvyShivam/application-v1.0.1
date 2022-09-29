import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const MacBookPro14OnePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-helvetica items-center mx-[auto] 3xl:p-[114px] lg:p-[74px] xl:p-[84px] 2xl:p-[95px] w-[100%]">
        <Row className="items-center justify-between lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[6px] w-[90%]">
          <Img
            src="images/img_image1.png"
            className="lg:h-[575px] xl:h-[657px] 2xl:h-[739px] 3xl:h-[887px] rounded-radius3515 w-[37%]"
            alt="imageOne"
          />
          <Column className="items-end w-[41%]">
            <Row className="justify-end ml-[auto] w-[72%]">
              <Text className="font-bold lg:leading-[47px] xl:leading-[54px] 2xl:leading-[60px] 3xl:leading-[73px] lg:text-[47px] xl:text-[54px] 2xl:text-[60px] 3xl:text-[73px] text-indigo_900 text-right w-[59%]">
                Imagine if
                <br />
                <br />
                had events.
              </Text>
              <Text className="bg-clip-text bg-gradient  font-bold lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] lg:text-[47px] xl:text-[54px] 2xl:text-[60px] 3xl:text-[73px] text-transparent w-[auto]">
                Snapchat{" "}
              </Text>
            </Row>
            <Text className="font-light leading-[normal] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-gray_800 text-right w-[100%]">
              Easily host and share events with your friends across any social
              media.
            </Text>
            <Button
              className="font-bold lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-center w-[66%]"
              shape="RoundedBorder10"
              size="sm"
              variant="GradientDeeppurpleA200PurpleA100"
            >
              🎉 Create my event
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MacBookPro14OnePage;
