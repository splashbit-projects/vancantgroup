import React from 'react';
import { useTranslations } from "next-intl";
import { Link } from '@/src/navigation';

function MoreButton() {
    const t = useTranslations("BlogPage");
  return (
    <Link href="/blog" className="main-button">{t("more")}</Link>
  )
}

export default MoreButton