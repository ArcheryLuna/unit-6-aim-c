import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
                      <p className=" text-xs lg:text-base">Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla molestias deserunt incidunt quae ipsam? Suscipit eum asperiores veritatis modi tenetur sit quod nesciunt nisi, possimus voluptas excepturi ipsum at!</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base lg:font-black lg:text-2xl"><FontAwesomeIcon icon={faFire} className="mr-2 bg-[#191919] rounded-md dark:bg-[#dfe9e9] px-3 py-3 hover:dark:text-amber-600 hover:text-amber-500 text-[#dfe9e9] dark:text-[#191919]" /> Bleeding Edge</CardTitle>
                    <CardDescription className="text-xs lg:text-lg">// Technically advanced</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className=" text-xs lg:text-base">Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla molestias deserunt incidunt quae ipsam? Suscipit eum asperiores veritatis modi tenetur sit quod nesciunt nisi, possimus voluptas excepturi ipsum at!</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base lg:font-black lg:text-2xl"><FontAwesomeIcon icon={faGraduationCap} className="mr-2 bg-[#191919] rounded-md dark:bg-[#dfe9e9] px-3 py-3 text-[#dfe9e9] dark:hover:text-sky-500 hover:text-sky-600 dark:text-[#191919]" /> Grow Your Skills</CardTitle>
                    <CardDescription className="text-xs lg:text-lg">// Learn best practices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className=" text-xs lg:text-base">Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nulla molestias deserunt incidunt quae ipsam? Suscipit eum asperiores veritatis modi tenetur sit quod nesciunt nisi, possimus voluptas excepturi ipsum at!</p>
                    </div>
                  </CardContent>
                </Card>
                
              </div>
              <Button className="rounded-full col-span-3 w-full mt-2 mb-2 text-[#dfe9e9] font-bold dark:text-[#191919]">
                <FontAwesomeIcon icon={faChevronRight} className="mr-1"/> Learn More
              </Button>
        </div>
    )
}