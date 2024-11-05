import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const FooterPage: React.FC = () => {
  return (
    <div className="bg-premium px-5 rounded-t-3xl relative">
      <div className="text-main grid grid-cols-2 md:grid-cols-4 gap-5 pt-24 pb-32 container mx-auto">
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
          <div className="text-lg md:text-base font-bold">ABOUT</div>
          <div className="text-sm">
            Verata Wallpaper dan Interior Jogja menawarkan kualitas impor
            kebutuhan wallpaper dan interior untuk memperindah ruang Anda.
          </div>
          <div className="font-bold text-lg md:text-base">SHOWROOM</div>
          <div>
            <div className="text-sm break-words">
              Km 8, Jl. Magelang No.5, Mlati Glondong, Sendangadi, Mlati, Sleman
              Regency, Special Region of Yogyakarta 55285
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-bold text-lg md:text-base">INFORMATION</div>
          <div>
            <div className="text-sm">Products</div>
            <div className="text-sm">Careers</div>
            <div className="text-sm">FAQs</div>
            <div className="text-sm">Licensing Law</div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-bold text-lg md:text-base">BUSINESS</div>
          <div className="text-sm">
            <p className="break-words">0878-7878-0251</p>
            <p className="break-words">veratadesign@yahoo.com</p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="font-bold text-lg md:text-base">FOLLOW US</div>
            <div className="flex flex-row gap-5">
              <a
                href="https://www.instagram.com/veratawallpapergordynjogja/"
                target="_blank"
              >
                <FaSquareInstagram size={25} />
              </a>
              <a
                href="https://www.facebook.com/veratawallpapergordynjogja/"
                target="_blank"
              >
                {" "}
                <FaSquareFacebook size={25} />
              </a>
              <FaSquareXTwitter size={25} />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2 col-span-2 md:col-span-1">
          {/* <!-- Additional external resources --> */}
          <div className="font-bold text-lg md:text-base">USEFUL RESOURCES</div>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <a
                href="https://jogjabagus.id/business/verata-gordyn"
                target="_blank"
              >
                Jogja Bagus - Verata Gordyn
              </a>
            </li>
            <li>
              <a
                href="https://www.krjogja.com/yogyakarta/1242502918/toko-verata-gordyn-dan-wallpaper-sediakan-produk-berkualitas-up-to-date"
                target="_blank"
              >
                KR Jogja - Toko Verata Gordyn dan Wallpaper Sediakan Produk
                Berkualitas Up To Date
              </a>
            </li>
            <li>
              <a
                href="https://bkppkutim.com/verata-wallpaper-jogja-gorden-jogja-vinyl-jogja---toko-interior-jogja-6057787010670704431/#google_vignette"
                target="_blank"
              >
                Local Services Business - Verata Wallpaper Jogja/Gorden Jogja/Vinyl Jogja - Toko Interior Jogja
              </a>
            </li>
            <li>
              <a href="https://www.solomediabisnis.com/5-rekomendasi-toko-gorden-di-sleman/" target="_blank">
                Solo Media Bisnis – 5 Rekomendasi Toko Gorden di Sleman
              </a>
            </li>
            <li>
              <a href="https://jogja.tribunnews.com/2020/07/06/verata-wallpaper-gordyn-kini-makin-luas-dan-lengkap-banyak-pilihandesain-kekinian" target="_blank">
                Tribunnews - Verata Wallpaper & Gordyn Kini Makin Luas dan Lengkap Banyak Pilihan Desain Kekinian
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-sm items-center py-5 font-medium">
        <span>
          &#169; 2024 by <strong>Verata</strong>. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default FooterPage;
