"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { CustomButton } from "."
import { updateSearchParams } from "@/utils"

const ShowMore = ({ pageNum, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter()
  const handleNavigation = () => {
    const newLimit = (pageNum + 1) * 10

    setLimit(newLimit)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
