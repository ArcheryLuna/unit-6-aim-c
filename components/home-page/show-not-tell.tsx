import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffeeBean, faFire, faGraduationCap, faChevronRight, faGlobeAmericas } from "@fortawesome/pro-solid-svg-icons";


export default function ShowNotTell() {
    return (
        <div>
            <div className="my-4 text-2xl lg:text-4xl font-black inline-flex">
            <FontAwesomeIcon icon={faGlobeAmericas} className="py-1" /> <Separator orientation={"vertical"} decorative={true} className="dark:bg-[#dfe9e9] bg-[#191919] mx-2"/> <h1>Creating a better future</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-x-6 lg:gap-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base lg:font-black lg:text-2xl"><FontAwesomeIcon icon={faCoffeeBean} className="mr-2 bg-[#191919] rounded-md dark:bg-[#dfe9e9] hover:dark:text-yellow-900 hover:text-amber-800 transition-all duration-200 px-3 py-3 text-[#dfe9e9] dark:text-[#191919]" /> Who Are We</CardTitle>
                    <CardDescription className="text-xs lg:text-lg">// Brief Summary</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className=" text-xs lg:text-base">We are a team of passionate developers, designersm and engineers who love to build and create amazing things. We are always looking for new challenges and projects to work on. From personal passion projects to large industry leaderrs, we are always looking for new opportunites to work on.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base lg:font-black lg:text-2xl"><FontAwesomeIcon icon={faFire} className="mr-2 bg-[#191919] rounded-md dark:bg-[#dfe9e9] px-3 py-3 hover:dark:text-amber-600 hover:text-amber-500 transition-all duration-200 text-[#dfe9e9] dark:text-[#191919]" /> Bleeding Edge</CardTitle>
                    <CardDescription className="text-xs lg:text-lg">// Technically advanced</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className=" text-xs lg:text-base">

From JavaScript frameworks like Next.js and Angular to building scalable infrastructure for large corporations, we are at the forefront of these technologies, both old and new, always ready to innovate and improve upon ourselves. We pride ourselves on everything from data security to creating stunning websites that leave viewers in awe, consistently pushing the boundaries of what's possible in web development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base lg:font-black lg:text-2xl"><FontAwesomeIcon icon={faGraduationCap} className="mr-2 bg-[#191919] rounded-md dark:bg-[#dfe9e9] px-3 py-3 text-[#dfe9e9] transition-all duration-200 dark:hover:text-sky-500 hover:text-sky-600 dark:text-[#191919]" /> Grow Your Skills</CardTitle>
                    <CardDescription className="text-xs lg:text-lg">// Learn best practices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className=" text-xs lg:text-base">
Elevate your career at Hot Beans, where innovation and growth go hand in hand. Dive into a world of cutting-edge technology, personalized growth paths, and collaborative projects. Benefit from expert mentorship, a flexible work-life balance, and competitive perks. Join us for a transformative journey where your development is our priority. Ready to grow and make an impact? Discover your future with us. </p>
                    </div>
                  </CardContent>
                </Card>
                
              </div>
              <Link href="/about">
                <Button className="rounded-full col-span-3 w-full mt-4 lg:mt-6 mb-2 text-[#dfe9e9] font-bold dark:text-[#191919]">
                  <FontAwesomeIcon icon={faChevronRight} className="mr-1"/> Learn More
                </Button>
              </Link>
        </div>
    )
}