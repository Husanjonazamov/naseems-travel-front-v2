import React from 'react'
import { useTranslations } from 'use-intl'

type Props = {
  heading: string;
}


const SectionHeading = ({heading}: Props) => {
  const t = useTranslations("travel");

  return (
    <div className='w-[90%] mx-auto'>
      <h1 className='text-xl sm:text-3xl text-blue-900 font-bold'>{heading}</h1>
      <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>{t("lorem")}</p>
    </div>
  )
}

export default SectionHeading;