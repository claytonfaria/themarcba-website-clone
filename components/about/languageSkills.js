import { Heading, Icon } from '@chakra-ui/core';

export default function LanguageSkills({ color, icon }) {
  return (
    <>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        Language skills{' '}
        <Icon verticalAlign="-20%" fontSize="2.2rem" as={icon} />
      </Heading>
      <table
        style={{
          borderCollapse: 'collapse',
          color,
          fontSize: '1.2rem',
          marginTop: '0.8rem',
        }}
      >
        <Languages language="English 🇺🇸" level="Fluent" />
        <Languages language="Portuguese 🇧🇷" level="Mothertongue" />
        <Languages language="Chinese 🇹🇼" level="Advanced" />
        <Languages language="Spanish 🇪🇸" level="Basic" />
      </table>
    </>
  );
}

function Languages({ language, level }) {
  return (
    <tr>
      <td
        style={{
          fontWeight: '700',
          paddingBottom: '0.5rem',
          paddingRight: '1rem',
          paddingTop: '0.5rem',
        }}
      >
        {language}
      </td>
      <td
        style={{
          fontWeight: '500',
          paddingBottom: '0.5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '0.5rem',
        }}
      >
        {level}
      </td>
    </tr>
  );
}
