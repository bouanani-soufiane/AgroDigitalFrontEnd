import { Card } from "./Card";
import { Table } from "./Table";

export const Dashboard = () => {
  return (
    <div className=" md:mt-0  mt-12">
      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
        <Card title="Total get free campaigns" number="17" color="#83E8E1" />
        <Card title="Needs approval" number="4" color="#83E8E1" />
        <Card title="Disputes" number="5" color="#FFBA79" />
        <Card title="Messages" number="8" color="#FFB2D3" />
      </div>
      <Table />
    </div>
  );
};
