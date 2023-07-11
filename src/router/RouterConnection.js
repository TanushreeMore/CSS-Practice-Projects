import { Routes, Route } from "react-router-dom";

import Home from "../Home";

import Loading from "../components/loading/Loading";
import EqualSizeColumn from "../components/equal_size_column/EqualSizeColumn";
import TextCenter from "../components/text_center_inside_a_div_block/TextCenter";
import CenterTextHorizontalAndVertical from "../components/center_text_horizontal_and_vertical/CenterTextHorizontalAndVertical";
import SpinTextOnMouseHover from "../components/spin_text_on_mouse_hover/SpinTextOnMouseHover";
import ImageHoverEffect from "../components/image_hover_effect/ImageHoverEffect";
import SkewTextOnHover from "../components/skew_text_on_hover/SkewTextOnHover";
import Text3D from "../components/text_3d/Text3D";
import ImageHoverEffect2 from "../components/image_hover_effect2/ImageHoverEffect2";
import CardFlipAnimation3D from "../components/card_flip_animation_3d/CardFlipAnimation3D";
import LoadingAnimation from "../components/loading_animation/LoadingAnimation";
import JumpingText3D from "../components/jumping_text_3d/JumpingText3D";



export const RouterConnection = () => {
  return (
        <Routes>

                <Route exact path="/" element={<Home />} />

                <Route exact path="/loading" element={<Loading />} />
                
                <Route exact path="/text_center" element={<TextCenter />} />
                
                <Route exact path="/equal_size_column" element={<EqualSizeColumn />} />
                
                <Route exact path="/center_text_horizontal_and_vertical" element={<CenterTextHorizontalAndVertical />} />
                
                <Route exact path="/spin_text_on_mouse_hover" element={<SpinTextOnMouseHover />} />

                <Route exact path="/image_hover_effect" element={<ImageHoverEffect />} />

                <Route exact path="/skew_text_on_hover" element={<SkewTextOnHover />} />

                <Route exact path="/text_3d" element={<Text3D />} />

                <Route exact path="/image_hover_effect2" element={<ImageHoverEffect2 />} />
                
                <Route exact path="/loading_animation" element={<LoadingAnimation />} />

                <Route exact path="/card_flip_animation_3d" element={<CardFlipAnimation3D />} />

                <Route exact path="/jumping_3d_text" element={<JumpingText3D />} />
                
                {/* <Route exact path="/" element={< />} /> */}
                
          </Routes>
  )
}
