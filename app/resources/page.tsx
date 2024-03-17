import { Metadata } from "next";

import { 
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import {
    faDollarCircle
} from "@fortawesome/pro-solid-svg-icons";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { TracingBeam } from "@/components/ui/tracing-beam"

import ResourceList from "@/data/resources";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot Beans | Resources",
  description: "Where developers can find jobs and grow their careers and talents.",
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { ResourceLanding } from "@/components/resources/resource-landing";

export default function Resources() {

    function ResourceTable() {
        return (
            <Table>
      <TableCaption>A list of resources to improve ur skills.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Is Paid For</TableHead>
          <TableHead>Name of Resource</TableHead>
          <TableHead>Type of Resource</TableHead>
          <TableHead className="text-center">Amount For Resource</TableHead>
          <TableHead>Link to Resource</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {
          ResourceList.map((resource) => (
                <TableRow key={resource.resourceId}>
                    <TableCell className="font-medium text-center"><FontAwesomeIcon icon={faDollarCircle} className={resource.resourcePaid ? "text-green-500" : "text-muted-foreground"}/></TableCell>
                    <TableCell>{resource.resourceName}</TableCell>
                    <TableCell>{resource.resourceType}</TableCell>
                    <TableCell className="text-center">{resource.resourceAmount ? `\$${resource.resourceAmount}`: "-"}</TableCell>
                    <TableCell>
                        <Link href={resource.resourceLink} target="_blank">
                            <Button className="w-full rounded-full text-[#dfe9e9] dark:text-[#191919]">
                                Click Here
                            </Button>
                        </Link>
                    </TableCell>
               </TableRow>
            ))
        }
        </TableBody>
        </Table>

        )
    }
  return (
  <>
    <ResourceLanding />
    <div className="px-6 py-6 lg:px-12 lg:py-12">
        <TracingBeam className="px-1">
            <ResourceTable />
        </TracingBeam>
    </div>
    <div className="px-6 py-6 lg:py-12 lg:px-12">
        <Card>
            <CardHeader>
                <CardTitle>
                    Careers
                </CardTitle>
                <CardDescription>
                    Discover the best use of your skills and talents.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    Find the best jobs and careers to grow your skills and talents.
                </p>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Link href="/careers" className="w-full">
                    <Button className="w-full rounded-full text-[#dfe9e9] dark:text-[#191919]">
                        Careers
                    </Button>
                </Link>
                <Link href="/team" className="w-full">
                    <Button variant={"outline"} className="w-full rounded-full">
                        The Team
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    </div>
    </>
  );
}
