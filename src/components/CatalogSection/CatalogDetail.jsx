import React, { useState } from "react";
import { useParams } from "react-router-dom";
// PALETTONE
import BlossoMair from "../../assets/img-detail/catalog/catalog-view/palettone/blossomair.jpg";
import DeepSpace from "../../assets/img-detail/catalog/catalog-view/palettone/deepspace.jpg";
import Earthenware from "../../assets/img-detail/catalog/catalog-view/palettone/earthenware.jpg";
import Linenair from "../../assets/img-detail/catalog/catalog-view/palettone/linenair.jpg";
import NaturalCotton from "../../assets/img-detail/catalog/catalog-view/palettone/naturalcotton.jpg";
import QuarryStone from "../../assets/img-detail/catalog/catalog-view/palettone/quarrystone.jpg";
import SaphireStar from "../../assets/img-detail/catalog/catalog-view/palettone/sapphirestar.jpg";
import Candy from "../../assets/img-detail/catalog/catalog-view/palettone/sugarcandy.jpg";
import WeekendSky from "../../assets/img-detail/catalog/catalog-view/palettone/weekendsky.jpg";
// XL PU
import BlueNickel from "../../assets/img-detail/catalog/catalog-view/xlpu/bluenickel.jpg";
import Carnelian from "../../assets/img-detail/catalog/catalog-view/xlpu/carnelianbeige.jpg";
import Citrine from "../../assets/img-detail/catalog/catalog-view/xlpu/citrine.jpg";
import CrystalBlue from "../../assets/img-detail/catalog/catalog-view/xlpu/crystalblue.jpg";
import Dolomite from "../../assets/img-detail/catalog/catalog-view/xlpu/dolomite.jpg";
import Flint from "../../assets/img-detail/catalog/catalog-view/xlpu/flint.jpg";
import Fossil from "../../assets/img-detail/catalog/catalog-view/xlpu/fossil.jpg";
import Jade from "../../assets/img-detail/catalog/catalog-view/xlpu/jade.jpg";
import Porcelain from "../../assets/img-detail/catalog/catalog-view/xlpu/porcelain.jpg";
import Pumice from "../../assets/img-detail/catalog/catalog-view/xlpu/pumice.jpg";
import RoseQuartz from "../../assets/img-detail/catalog/catalog-view/xlpu/rosequartz.jpg";
import SedonaPink from "../../assets/img-detail/catalog/catalog-view/xlpu/sedonapink.jpg";
import TanzaniteBlue from "../../assets/img-detail/catalog/catalog-view/xlpu/tanzaniteblue.jpg";
// Verona
import Americano from "../../assets/img-detail/catalog/catalog-view/verona/americano.jpg";
import Azure from "../../assets/img-detail/catalog/catalog-view/verona/azurelarge.jpg";
import Cappucino from "../../assets/img-detail/catalog/catalog-view/verona/cappuccinolarge.jpg";
import CookieCream from "../../assets/img-detail/catalog/catalog-view/verona/cookiecream.jpg";
import DuckEgg from "../../assets/img-detail/catalog/catalog-view/verona/duckegg.jpg";
import Freshmint from "../../assets/img-detail/catalog/catalog-view/verona/freshmint.jpg";
import GlacierLarge from "../../assets/img-detail/catalog/catalog-view/verona/glacierlarge.jpg";
import HorizonBlue from "../../assets/img-detail/catalog/catalog-view/verona/horizonblue.jpg";
import Marshmallow from "../../assets/img-detail/catalog/catalog-view/verona/marshmallow.jpg";
import MochaLarge from "../../assets/img-detail/catalog/catalog-view/verona/mochalarge.jpg";
import Moonsoon from "../../assets/img-detail/catalog/catalog-view/verona/moonsoon.jpg";
import RockSalt from "../../assets/img-detail/catalog/catalog-view/verona/rocksalt.jpg";
import SeaBreeze from "../../assets/img-detail/catalog/catalog-view/verona/seabreeze.jpg";
import SummerCoulis from "../../assets/img-detail/catalog/catalog-view/verona/summercoulis.jpg";
// Classic Mystique
import Asparaguss from "../../assets/img-detail/catalog/catalog-view/mystique/asparaguss.jpg";
import AtlanticSurf from "../../assets/img-detail/catalog/catalog-view/mystique/atlanticsurf.jpg";
import Nocturne from "../../assets/img-detail/catalog/catalog-view/mystique/nocturne.jpg";
import Quartz from "../../assets/img-detail/catalog/catalog-view/mystique/quartz.jpg";
import SilentDove from "../../assets/img-detail/catalog/catalog-view/mystique/silentdove.jpg";
import SilverMist from "../../assets/img-detail/catalog/catalog-view/mystique/silvermist.jpg";
import SoftAlmond from "../../assets/img-detail/catalog/catalog-view/mystique/softalmond.jpg";
import SteelParade from "../../assets/img-detail/catalog/catalog-view/mystique/steelparade.jpg";
// ExponaFlow
import ClassicLimedAsh from "../../assets/img-detail/catalog/catalog-view/exponaflow/classiclimedash.jpg";
import DarkGreyConcrete from "../../assets/img-detail/catalog/catalog-view/exponaflow/darkgreyconcrete.jpg";
import GreyWeather from "../../assets/img-detail/catalog/catalog-view/exponaflow/greyweatheredchevron.jpg";
import LightGrey from "../../assets/img-detail/catalog/catalog-view/exponaflow/lightgreyconcrete.jpg";
// APEX
import Biotite from "../../assets/img-detail/catalog/catalog-view/apex/biotite.jpg";
import Breccia from "../../assets/img-detail/catalog/catalog-view/apex/breccia.jpg";
import Chromite from "../../assets/img-detail/catalog/catalog-view/apex/chromite.jpg";
import GreenQuartz from "../../assets/img-detail/catalog/catalog-view/apex/greenquartz.jpg";
// FOREST FX
import European from "../../assets/img-detail/catalog/catalog-view/forest/european.jpg";
import AmericanOak from "../../assets/img-detail/catalog/catalog-view/forest/americanoak.jpg";
import Oslo from "../../assets/img-detail/catalog/catalog-view/forest/oslo.jpg";
import ParisHoak from "../../assets/img-detail/catalog/catalog-view/forest/parishoak.jpg";
// QUATTRO
import Lunarr from "../../assets/img-detail/catalog/catalog-view/quattro/lunarshell.jpg";
import SlateHaze from "../../assets/img-detail/catalog/catalog-view/quattro/slatehaze.jpg";

const catalogs = [
  {
    id: 1,
    title: "Palettone",
    images: [
        { src: BlossoMair, name: "BlossoMair" },
        { src: DeepSpace, name: "DeepSpace" },
        { src: Earthenware, name: "Earthenware" },
        { src: Linenair, name: "Linenair" },
        { src: NaturalCotton, name: "NaturalCotton" },
        { src: QuarryStone, name: "QuarryStone" },
        { src: SaphireStar, name: "SaphireStar" },
        { src: Candy, name: "Candy" },
        { src: WeekendSky, name: "WeekendSky" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  {
    id: 2,
    title: "Palettone",
    images: [
        { src: BlueNickel, name: "BlueNickel" },
        { src: Carnelian, name: "Carnelian" },
        { src: Citrine, name: "Citrine" },
        { src: CrystalBlue, name: "CrystalBlue" },
        { src: Dolomite, name: "Dolomite" },
        { src: Flint, name: "Flint" },
        { src: Fossil, name: "Fossil" },
        { src: Jade, name: "Jade" },
        { src: Porcelain, name: "Porcelain" },
        { src: Pumice, name: "Pumice" },
        { src: RoseQuartz, name: "RoseQuartz" },
        { src: SedonaPink, name: "SedonaPink" },
        { src: TanzaniteBlue, name: "TanzaniteBlue" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  {
    id: 3,
    title: "Verona",
    images: [
        { src: Americano, name: "Americano" },
        { src: Azure, name: "Azure" },
        { src: Cappucino, name: "Cappucino" },
        { src: CookieCream, name: "CookieCream" },
        { src: DuckEgg, name: "DuckEgg" },
        { src: Freshmint, name: "Freshmint" },
        { src: GlacierLarge, name: "GlacierLarge" },
        { src: HorizonBlue, name: "HorizonBlue" },
        { src: Marshmallow, name: "Marshmallow" },
        { src: MochaLarge, name: "MochaLarge" },
        { src: Moonsoon, name: "Monsoon" },
        { src: RockSalt, name: "RockSalt" },
        { src: SeaBreeze, name: "SeaBreeze" },
        { src: SummerCoulis, name: "SummerCoulis" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  {
    id: 4,
    title: "Classic Mystique",
    images: [
        { src: Asparaguss, name: "Asparagus" },
        { src: AtlanticSurf, name: "Atlantic Surf" },
        { src: Nocturne, name: "Nocturne" },
        { src: Quartz, name: "Quartz" },
        { src: SilentDove, name: "SilentDove" },
        { src: SilverMist, name: "SilverMist" },
        { src: SoftAlmond, name: "SoftAlmond" },
        { src: SteelParade, name: "SteelParade" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  {
    id: 5,
    title: "Expona Flow",
    images: [
        { src: ClassicLimedAsh, name: "Classic Limed Ash" },
        { src: DarkGreyConcrete, name: "Dark Grey Concrete" },
        { src: GreyWeather, name: "Grey Weathered Chevron" },
        { src: LightGrey, name: "Light Grey Concrete" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  {
    id: 6,
    title: "Apex",
    images: [
        { src: Biotite, name: "Biotite" },
         { src: Breccia, name: "Breccia" },
         { src: Chromite, name: "Chromite" },
         { src: GreenQuartz, name: "Green Quartz" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  {
    id: 7,
    title: "Quattro",
    images: [
        { src: Lunarr, name: "Lunar Shell" },
         { src: SlateHaze, name: "Slate Haze" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  {
    id: 8,
    title: "Forest FX",
    images: [
        { src: European, name: "Classic Limed Ash" },
         { src: AmericanOak, name: "American Oak" },
         { src: Oslo, name: "Oslo Oak" },
         { src: ParisHoak, name: "Parish Oak" },
    ],
    description: "Elegant and high-quality vinyl flooring suitable for various spaces",
  },
  
];

function CatalogDetail() {
  const { id } = useParams();
  const catalog = catalogs.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!catalog) return <div className="text-center p-10">Product not found</div>;
  return (
    <div className="p-6 max-w-6xl mx-auto">
  
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">{catalog.title}</h2>
      <p className="text-gray-600 mb-8 text-center">{catalog.description}</p>
  
      {/* Grid 3 kolom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catalog.images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-2 cursor-pointer"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="text-center text-sm text-gray-700 mt-2 font-medium">{img.name}</p>
          </div>
        ))}
      </div>
  
      {/* Modal gambar diperbesar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-2"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 

export default CatalogDetail;
