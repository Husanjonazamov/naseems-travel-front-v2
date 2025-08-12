"use client"

import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { useTranslations } from "use-intl";

export interface PageContactProps {}

const PageContact: FC<PageContactProps> = ({}) => {
  const t = useTranslations("travel");

  const info = [
    {
      title: t("address_label"),
      desc: t("address_desc"),
    },
    {
      title: t("email_label"),
      desc: t("email_value"),
    },
    {
      title: t("phone_label"),
      desc: t("phone_value"),
    },
  ];

  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          {t("contact")}
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  {t("socials_label")}
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>{t("full_name")}</Label>
                  <Input
                    placeholder={t("full_name_example")}
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>{t("phone_label")}</Label>
                  <Input
                    type="text"
                    placeholder={t("phone_example")}
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>{t("message")}</Label>
                  <Textarea
                    className="mt-1"
                    rows={6}
                    placeholder={t("message")}
                  />
                </label>
                <div>
                  <ButtonPrimary type="submit">{t("send_message")}</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
