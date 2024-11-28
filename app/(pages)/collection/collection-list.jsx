import CardBanner from '../../../components/card/card-banner'
import CardProductTest from '../../../components/card/card-product-test'

const CollectionList = ({ data }) => {
  return (
    <div className="max-w-full">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 grid-cols-2 pt-[45px] max-w-full px-[30px] mx-auto">
        <CardBanner
          bannerUrl={
            'https://media3.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/November2024/mceclip24_1.jpg'
          }
        />
        {data &&
          data.map((product, index) => {
            return <CardProductTest key={index} product={product} />
          })}
      </div>
    </div>
  )
}

export default CollectionList
