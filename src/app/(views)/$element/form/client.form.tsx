'use client';
import React from 'react';
import CE_FormQlola from './client.form.qlola';
import CE_FormKprBri from './client.form.KprBri';

const CE_Form = ({
  fieldForm,
  title,
  subTitle,
}: {
  fieldForm: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      {fieldForm === 'qlola' && (
        <CE_FormQlola fieldForm={fieldForm} title={title} subTitle={subTitle} />
      )}
      {fieldForm === 'kprbri' && (
        <CE_FormKprBri
          fieldForm={fieldForm}
          title={title}
          subTitle={subTitle}
        />
      )}
    </>
  );
};

export default CE_Form;
