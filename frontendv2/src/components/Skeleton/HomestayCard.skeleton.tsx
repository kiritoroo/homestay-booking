import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const HomestayCardSkeleton = () => {
  
  return (
    <SkeletonTheme baseColor="#f2f7fc" highlightColor="#f8fbfd">
      <Skeleton count={1} width={"28vw"} height={"25vw"}/>
      <Skeleton count={1} inline width={250} height={20}/>
      <Skeleton count={1} width={100} height={20} style={{ marginLeft: 10 }}/>
      <Skeleton count={1} width={200} height={30}/>
    </SkeletonTheme>
  )
}