import type { MetaFunction } from "@remix-run/node";
import { DataTableDemo } from "~/components/shared/Datatable/Datatable";
import { Card, CardTitle } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="mt-2">
      <Card>
        <CardTitle>Upcoming bookings</CardTitle>
        <DataTableDemo />
      </Card>
    </main>
  );
}
