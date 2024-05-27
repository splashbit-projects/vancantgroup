import { Link } from "@/src/navigation";
import React from "react";
import CardWithHover from "../LayoutElements/CardWithHover";
import { useTranslations } from "next-intl";

function HomeKey() {
  const t = useTranslations("HomeKey");
  return (
    <section className="home-key">
      <div className="home-key__container _container">
        <div className="home-key__body">
          <h2 className="home-key__title">{t("title")}</h2>
          <h3 className="home-key__subtitle">{t("subtitle")}</h3>
          <div className="home-key__content">
            <div className="home-key__row-01">
              <CardWithHover
                image={`/images/home/vancant-home-key-01.png`}
                title={t("taskTitle1")}
                text={t("taskText1")}
              />
              <CardWithHover
                image={`/images/home/vancant-home-key-02.png`}
                title={t("taskTitle2")}
                text={t("taskText2")}
              />
              <CardWithHover
                image={`/images/home/vancant-home-key-03.png`}
                title={t("taskTitle3")}
                text={t("taskText3")}
              />
            </div>
            <div className="home-key__row-02">
              <CardWithHover
                image={`/images/home/vancant-home-key-04.png`}
                title={t("taskTitle4")}
                text={t("taskText4")}
              />
              <CardWithHover
                image={`/images/home/vancant-home-key-05.png`}
                title={t("taskTitle5")}
                text={t("taskText5")}
              />
              <CardWithHover
                image={`/images/home/vancant-home-key-06.png`}
                title={t("taskTitle6")}
                text={t("taskText6")}
              />
            </div>
            <div className="home-key__row-03">
              <CardWithHover
                image={`/images/home/vancant-home-key-07.png`}
                title={t("taskTitle7")}
                text={t("taskText7")}
              />
              <CardWithHover
                image={`/images/home/vancant-home-key-08.png`}
                title={t("taskTitle8")}
                text={t("taskText8")}
              />
              <CardWithHover
                image={`/images/home/vancant-home-key-09.png`}
                title={t("taskTitle9")}
                text={t("taskText9")}
              />
            </div>
          </div>
          <Link href="/services" className="home-key__link">
            {t("tryButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeKey;
