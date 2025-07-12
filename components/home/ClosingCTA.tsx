import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LampContainer } from "@/components/ui/lamp"

export function ClosingCTA() {
  return (
    <div className="scrollbar-hide mt-20 max-w-[100vw] overflow-x-hidden">
      <LampContainer>
        <div className="relative flex w-full flex-col items-center justify-center text-center">
          <h2 className="!leading-[1.15] mt-8 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text py-4 text-center font-heading font-medium text-4xl text-transparent tracking-tight md:text-7xl">
            Shape Your Future <br />
            Career with Pathera
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">
            Take control of your career journey with Pathera&apos;s AI-powered platform.
            From personalized guidance to interview preparation, we&apos;re here to help
            you land your dream role.
          </p>
          <div className="mt-6">
            <Button>
              <Link href="/sign-in">Start your journey</Link>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </LampContainer>
    </div>
  )
} 