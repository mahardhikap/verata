import Head from "next/head";
interface SchemaProps {
  schema: any;
}

const SchemaOrg: React.FC<SchemaProps> = ({ schema }) => {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
};

export default SchemaOrg;
