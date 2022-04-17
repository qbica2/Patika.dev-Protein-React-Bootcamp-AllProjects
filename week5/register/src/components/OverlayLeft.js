/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useContext } from "react";

import Logo from "../constants/logos/PatikaDev";
import style from "../styles/overlayleft.module.scss";
import TopVector from "../constants/vectors/TopVector";
import BottomVector from "../constants/vectors/BottomVector";
import useWindowSize from "../hooks/useWindowSize";
import ThemeContext from "../contexts/ThemeContext";


function OverlayLeft() {
  const { theme,vectorColor } = useContext(ThemeContext);
  const [,height ] = useWindowSize();

  const [logoSize,setLogoSize] = useState({
    width: 341,
    height: 144
  });
  const [topVectorSize,setTopVectorSize] = useState({
    width: 361,
    height: 136
  });
  const [bottomVectorSize,setBottomVectorSize] = useState({
    width: 521,
    height: 136
  });

  useEffect(() => {
    if (height < 1080) {
      setLogoSize({
        width: 250,
        height: 100
      });
      setTopVectorSize({
        width: 270,
        height: 110
      });
      setBottomVectorSize({
        width:450,
        height: 110
      });
    }else {
      setLogoSize({
        width: 341,
        height: 144
      });
      setTopVectorSize({
        width: 361,
        height: 136
      });
      setBottomVectorSize({
        width: 521,
        height: 136
      });
    }
  }, [height]);

  return (
    <div className={`${style.overlayLeft} ${theme === "light" && style.light} ${theme === "dark" && style.dark}`}>
      <div className={style.logo}>
        <Logo width={logoSize.width} height={logoSize.height} textColor= "#444AFF" iconColor="#FFBF5E"/>
      </div>
      <div className={style.title}>YAZILIM PATİKALARI </div>
      <p>
        Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.
      </p>
      <div className={style.vectorContainer}>
        <span>
          <TopVector width={topVectorSize.width} height={topVectorSize.height} color={vectorColor}/>
        </span>
        <span>
          <BottomVector width={bottomVectorSize.width} height={bottomVectorSize.height} color={vectorColor}/>
        </span>
      </div>
    </div>
  );
}

export default OverlayLeft;