import React from "react";

import { Column, Row, Text, List, Button, Img } from "components";

const MacBookPro14OneOnePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-helvetica items-center mx-[auto] lg:p-[136px] xl:p-[155px] 2xl:p-[175px] 3xl:p-[210px] w-[100%]">
        <Row className="justify-center 2xl:mb-[108px] 3xl:mb-[130px] lg:mb-[84px] xl:mb-[96px] w-[90%]">
          <Column className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[52%]">
            <Text className="font-bold ml-[3px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-indigo_900 w-[auto]">
              Birthday Bash
            </Text>
            <Text className="font-normal 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_600 w-[auto]">
              <span className="text-gray_600 font-helvetica">Hosted by </span>
              <span className="text-gray_600 font-helvetica font-bold">
                Elysia
              </span>
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[42px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[81%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] rounded-radius10 w-[100%]">
                <Button className="flex lg:h-[42px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[65px] items-center justify-center lg:w-[41px] xl:w-[47px] 2xl:w-[53px] 3xl:w-[64px]">
                  <Img
                    src="images/img_calendar.svg"
                    className="flex items-center justify-center"
                    alt="calendar"
                  />
                </Button>
                <Column className="w-[76%]">
                  <Text className="font-bold lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-indigo_900 w-[auto]">
                    18 August 6:00PM
                  </Text>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_800 w-[auto]">
                    <span className="text-gray_800 font-helvetica">to </span>
                    <span className="text-gray_800 font-helvetica font-bold">
                      19 August 1:00PM{" "}
                    </span>
                    <span className="text-gray_800 font-helvetica">
                      UTC +10
                    </span>
                  </Text>
                </Column>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"
                  alt="arrowright"
                />
              </Row>
              <Row className="items-center justify-between lg:my-[12px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] rounded-radius10 w-[100%]">
                <Button className="flex lg:h-[42px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[65px] items-center justify-center lg:w-[41px] xl:w-[47px] 2xl:w-[53px] 3xl:w-[64px]">
                  <Img
                    src="images/img_location.svg"
                    className="flex items-center justify-center"
                    alt="location"
                  />
                </Button>
                <Column className="w-[76%]">
                  <Text className="font-bold lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-indigo_900 w-[auto]">
                    Street name
                  </Text>
                  <Text className="font-normal xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_800 w-[auto]">
                    Suburb, State, Postcode
                  </Text>
                </Column>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] w-[2%]"
                  alt="arrowright One"
                />
              </Row>
            </List>
          </Column>
          <Img
            src="images/img_eventimage.png"
            className="lg:h-[371px] xl:h-[424px] 2xl:h-[477px] 3xl:h-[572px] lg:w-[370px] xl:w-[423px] 2xl:w-[476px] 3xl:w-[571px]"
            alt="Eventimage"
          />
        </Row>
      </Column>
    </>
  );
};

export default MacBookPro14OneOnePage;
