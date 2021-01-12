import React from 'react';
import { useTranslation } from "react-i18next";
import '../../Translations/I18n'

const ExampleComponents = (props) => {
    const {t} = useTranslation();
    let lng = props.lang;
    return (
        <div>
        <p>
          <p>
          {t("welcome")}
          </p>
          <p>
            {t("date_format_one", { date: new Date() })}
          </p>
          <p>
            {t("date_format_two", { date: new Date() })}
          </p>
        </p>
    </div>
    );
};

export default ExampleComponents;