/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconProps } from '@/types/icons/iconsProps.ts';
import { iconClassBuilder } from '../iconClassBuilder.ts';

export const CrownFilled = (props: IconProps) => {
  const {
    width = 20,
    height = 20,
    fill = '#11161A',
    stroke = '#11161A',
    strokeWidth = 1.1,
    rotationOptions,
    rotate,
    className = '',
    description = '',
    alt,
    isExplicit = true,
  } = props;

  const iconClasses = iconClassBuilder(fill, rotationOptions, rotate, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={isExplicit}
      aria-labelledby="svgTitle svgDesc"
      viewBox="0 0 20 20"
      className={iconClasses}
      width={width}
      height={height}
    >
      <title id="svgTitle">{alt}</title>
      <desc id="svgDesc">{description}</desc>
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M10.3031 5.50888L10 5.68836L9.69689 5.50888C9.53537 5.41325 9.43889 5.24918 9.43889 5.07143C9.43889 4.8019 9.67084 4.55 10 4.55C10.3292 4.55 10.5611 4.8019 10.5611 5.07143C10.5611 5.24727 10.4639 5.41366 10.3031 5.50888ZM9.90493 6.23532L10 6.05197L10.0951 6.23532L11.6867 9.30496C12.1019 10.1056 13.1554 10.3173 13.8606 9.77413L13.861 9.77383L16.3038 7.88887L15.0597 14.4882C15.0597 14.4883 15.0597 14.4884 15.0596 14.4885C14.9558 15.0332 14.4572 15.45 13.85 15.45H6.15C5.53976 15.45 5.04205 15.0305 4.94057 14.4896L4.94048 14.4892L3.69622 7.88887L6.139 9.77383L6.13939 9.77413C6.84456 10.3173 7.8981 10.1056 8.31326 9.30496L9.90493 6.23532ZM16.8694 7.30714H16.6015L16.435 7.09195C16.3657 7.00252 16.3278 6.89716 16.3278 6.78571C16.3278 6.51619 16.5597 6.26429 16.8889 6.26429C17.218 6.26429 17.45 6.51619 17.45 6.78571C17.45 7.05524 17.218 7.30714 16.8889 7.30714H16.8889H16.8888H16.8888H16.8888H16.8887H16.8887H16.8887H16.8886H16.8886H16.8886H16.8885H16.8885H16.8885H16.8884H16.8884H16.8884H16.8883H16.8883H16.8883H16.8882H16.8882H16.8882H16.8881H16.8881H16.8881H16.888H16.888H16.888H16.8879H16.8879H16.8879H16.8878H16.8878H16.8877H16.8877H16.8877H16.8876H16.8876H16.8876H16.8875H16.8875H16.8875H16.8874H16.8874H16.8874H16.8873H16.8873H16.8873H16.8872H16.8872H16.8872H16.8871H16.8871H16.887H16.887H16.887H16.8869H16.8869H16.8869H16.8868H16.8868H16.8868H16.8867H16.8867H16.8867H16.8866H16.8866H16.8865H16.8865H16.8865H16.8864H16.8864H16.8864H16.8863H16.8863H16.8862H16.8862H16.8862H16.8861H16.8861H16.8861H16.886H16.886H16.886H16.8859H16.8859H16.8858H16.8858H16.8858H16.8857H16.8857H16.8857H16.8856H16.8856H16.8855H16.8855H16.8855H16.8854H16.8854H16.8854H16.8853H16.8853H16.8852H16.8852H16.8852H16.8851H16.8851H16.8851H16.885H16.885H16.8849H16.8849H16.8849H16.8848H16.8848H16.8847H16.8847H16.8847H16.8846H16.8846H16.8846H16.8845H16.8845H16.8844H16.8844H16.8844H16.8843H16.8843H16.8842H16.8842H16.8842H16.8841H16.8841H16.8841H16.884H16.884H16.8839H16.8839H16.8839H16.8838H16.8838H16.8837H16.8837H16.8837H16.8836H16.8836H16.8835H16.8835H16.8835H16.8834H16.8834H16.8834H16.8833H16.8833H16.8832H16.8832H16.8832H16.8831H16.8831H16.883H16.883H16.883H16.8829H16.8829H16.8828H16.8828H16.8828H16.8827H16.8827H16.8826H16.8826H16.8826H16.8825H16.8825H16.8824H16.8824H16.8824H16.8823H16.8823H16.8822H16.8822H16.8822H16.8821H16.8821H16.882H16.882H16.882H16.8819H16.8819H16.8818H16.8818H16.8818H16.8817H16.8817H16.8816H16.8816H16.8816H16.8815H16.8815H16.8814H16.8814H16.8814H16.8813H16.8813H16.8812H16.8812H16.8812H16.8811H16.8811H16.881H16.881H16.881H16.8809H16.8809H16.8808H16.8808H16.8808H16.8807H16.8807H16.8806H16.8806H16.8805H16.8805H16.8805H16.8804H16.8804H16.8803H16.8803H16.8803H16.8802H16.8802H16.8801H16.8801H16.8801H16.88H16.88H16.8799H16.8799H16.8799H16.8798H16.8798H16.8797H16.8797H16.8797H16.8796H16.8796H16.8795H16.8795H16.8795H16.8794H16.8794H16.8793H16.8793H16.8792H16.8792H16.8792H16.8791H16.8791H16.879H16.879H16.879H16.8789H16.8789H16.8788H16.8788H16.8788H16.8787H16.8787H16.8786H16.8786H16.8786H16.8785H16.8785H16.8784H16.8784H16.8784H16.8783H16.8783H16.8782H16.8782H16.8781H16.8781H16.8781H16.878H16.878H16.8779H16.8779H16.8779H16.8778H16.8778H16.8777H16.8777H16.8777H16.8776H16.8776H16.8775H16.8775H16.8775H16.8774H16.8774H16.8773H16.8773H16.8773H16.8772H16.8772H16.8771H16.8771H16.8771H16.877H16.877H16.8769H16.8769H16.8769H16.8768H16.8768H16.8767H16.8767H16.8767H16.8766H16.8766H16.8765H16.8765H16.8765H16.8764H16.8764H16.8763H16.8763H16.8763H16.8762H16.8762H16.8761H16.8761H16.8761H16.876H16.876H16.8759H16.8759H16.8759H16.8758H16.8758H16.8757H16.8757H16.8757H16.8756H16.8756H16.8755H16.8755H16.8755H16.8754H16.8754H16.8753H16.8753H16.8753H16.8752H16.8752H16.8751H16.8751H16.8751H16.875H16.875H16.8749H16.8749H16.8749H16.8748H16.8748H16.8747H16.8747H16.8747H16.8746H16.8746H16.8745H16.8745H16.8745H16.8744H16.8744H16.8744H16.8743H16.8743H16.8742H16.8742H16.8742H16.8741H16.8741H16.874H16.874H16.874H16.8739H16.8739H16.8739H16.8738H16.8738H16.8737H16.8737H16.8737H16.8736H16.8736H16.8735H16.8735H16.8735H16.8734H16.8734H16.8734H16.8733H16.8733H16.8732H16.8732H16.8732H16.8731H16.8731H16.8731H16.873H16.873H16.8729H16.8729H16.8729H16.8728H16.8728H16.8728H16.8727H16.8727H16.8726H16.8726H16.8726H16.8725H16.8725H16.8725H16.8724H16.8724H16.8723H16.8723H16.8723H16.8722H16.8722H16.8722H16.8721H16.8721H16.872H16.872H16.872H16.8719H16.8719H16.8719H16.8718H16.8718H16.8718H16.8717H16.8717H16.8716H16.8716H16.8716H16.8715H16.8715H16.8715H16.8714H16.8714H16.8714H16.8713H16.8713H16.8713H16.8712H16.8712H16.8711H16.8711H16.8711H16.871H16.871H16.871H16.8709H16.8709H16.8709H16.8708H16.8708H16.8708H16.8707H16.8707H16.8707H16.8706H16.8706H16.8706H16.8705H16.8705H16.8704H16.8704H16.8704H16.8703H16.8703H16.8703H16.8702H16.8702H16.8702H16.8701H16.8701H16.8701H16.87H16.87H16.87H16.8699H16.8699H16.8699H16.8698H16.8698H16.8698H16.8697H16.8697H16.8697H16.8696H16.8696H16.8696H16.8695H16.8695H16.8695H16.8694ZM3.56504 7.09195L3.39851 7.30714H3.13056H3.13052H3.13049H3.13046H3.13042H3.13039H3.13036H3.13033H3.13029H3.13026H3.13023H3.13019H3.13016H3.13013H3.13009H3.13006H3.13003H3.12999H3.12996H3.12993H3.12989H3.12986H3.12982H3.12979H3.12976H3.12972H3.12969H3.12965H3.12962H3.12959H3.12955H3.12952H3.12948H3.12945H3.12941H3.12938H3.12934H3.12931H3.12927H3.12924H3.12921H3.12917H3.12914H3.1291H3.12907H3.12903H3.12899H3.12896H3.12892H3.12889H3.12885H3.12882H3.12878H3.12875H3.12871H3.12868H3.12864H3.1286H3.12857H3.12853H3.1285H3.12846H3.12843H3.12839H3.12835H3.12832H3.12828H3.12824H3.12821H3.12817H3.12814H3.1281H3.12806H3.12803H3.12799H3.12795H3.12792H3.12788H3.12784H3.12781H3.12777H3.12773H3.1277H3.12766H3.12762H3.12758H3.12755H3.12751H3.12747H3.12744H3.1274H3.12736H3.12732H3.12729H3.12725H3.12721H3.12717H3.12714H3.1271H3.12706H3.12702H3.12699H3.12695H3.12691H3.12687H3.12684H3.1268H3.12676H3.12672H3.12668H3.12665H3.12661H3.12657H3.12653H3.12649H3.12645H3.12642H3.12638H3.12634H3.1263H3.12626H3.12622H3.12619H3.12615H3.12611H3.12607H3.12603H3.12599H3.12595H3.12592H3.12588H3.12584H3.1258H3.12576H3.12572H3.12568H3.12564H3.12561H3.12557H3.12553H3.12549H3.12545H3.12541H3.12537H3.12533H3.12529H3.12525H3.12521H3.12518H3.12514H3.1251H3.12506H3.12502H3.12498H3.12494H3.1249H3.12486H3.12482H3.12478H3.12474H3.1247H3.12466H3.12462H3.12458H3.12454H3.1245H3.12447H3.12443H3.12439H3.12435H3.12431H3.12427H3.12423H3.12419H3.12415H3.12411H3.12407H3.12403H3.12399H3.12395H3.12391H3.12387H3.12383H3.12379H3.12375H3.12371H3.12367H3.12363H3.12359H3.12355H3.12351H3.12347H3.12343H3.12339H3.12335H3.12331H3.12327H3.12323H3.12319H3.12314H3.1231H3.12306H3.12302H3.12298H3.12294H3.1229H3.12286H3.12282H3.12278H3.12274H3.1227H3.12266H3.12262H3.12258H3.12254H3.1225H3.12246H3.12242H3.12238H3.12234H3.1223H3.12226H3.12222H3.12217H3.12213H3.12209H3.12205H3.12201H3.12197H3.12193H3.12189H3.12185H3.12181H3.12177H3.12173H3.12169H3.12165H3.12161H3.12157H3.12152H3.12148H3.12144H3.1214H3.12136H3.12132H3.12128H3.12124H3.1212H3.12116H3.12112H3.12108H3.12104H3.121H3.12096H3.12091H3.12087H3.12083H3.12079H3.12075H3.12071H3.12067H3.12063H3.12059H3.12055H3.12051H3.12047H3.12043H3.12039H3.12035H3.1203H3.12026H3.12022H3.12018H3.12014H3.1201H3.12006H3.12002H3.11998H3.11994H3.1199H3.11986H3.11982H3.11978H3.11974H3.11969H3.11965H3.11961H3.11957H3.11953H3.11949H3.11945H3.11941H3.11937H3.11933H3.11929H3.11925H3.11921H3.11917H3.11913H3.11909H3.11905H3.11901H3.11897H3.11893H3.11888H3.11884H3.1188H3.11876H3.11872H3.11868H3.11864H3.1186H3.11856H3.11852H3.11848H3.11844H3.1184H3.11836H3.11832H3.11828H3.11824H3.1182H3.11816H3.11812H3.11808H3.11804H3.118H3.11796H3.11792H3.11788H3.11784H3.1178H3.11776H3.11772H3.11768H3.11764H3.1176H3.11756H3.11752H3.11748H3.11744H3.1174H3.11736H3.11732H3.11728H3.11724H3.1172H3.11716H3.11712H3.11708H3.11704H3.117H3.11696H3.11692H3.11688H3.11685H3.11681H3.11677H3.11673H3.11669H3.11665H3.11661H3.11657H3.11653H3.11649H3.11645H3.11641H3.11637H3.11633H3.1163H3.11626H3.11622H3.11618H3.11614H3.1161H3.11606H3.11602H3.11598H3.11594H3.11591H3.11587H3.11583H3.11579H3.11575H3.11571H3.11567H3.11563H3.1156H3.11556H3.11552H3.11548H3.11544H3.1154H3.11537H3.11533H3.11529H3.11525H3.11521H3.11517H3.11514H3.1151H3.11506H3.11502H3.11498H3.11495H3.11491H3.11487H3.11483H3.11479H3.11476H3.11472H3.11468H3.11464H3.11461H3.11457H3.11453H3.11449H3.11445H3.11442H3.11438H3.11434H3.11431H3.11427H3.11423H3.11419H3.11416H3.11412H3.11408H3.11405H3.11401H3.11397H3.11393H3.1139H3.11386H3.11382H3.11379H3.11375H3.11371H3.11368H3.11364H3.1136H3.11357H3.11353H3.11349H3.11346H3.11342H3.11339H3.11335H3.11331H3.11328H3.11324H3.11321H3.11317H3.11313H3.1131H3.11306H3.11303H3.11299H3.11296H3.11292H3.11288H3.11285H3.11281H3.11278H3.11274H3.11271H3.11267H3.11264H3.1126H3.11257H3.11253H3.1125H3.11246H3.11243H3.11239H3.11236H3.11232H3.11229H3.11225H3.11222H3.11218H3.11215H3.11212H3.11208H3.11205H3.11201H3.11198H3.11194H3.11191H3.11188H3.11184H3.11181H3.11177H3.11174H3.11171H3.11167H3.11164H3.11161H3.11157H3.11154H3.11151H3.11147H3.11144H3.11141H3.11137H3.11134H3.11131H3.11127H3.11124H3.11121H3.11118H3.11114H3.11111C2.78195 7.30714 2.55 7.05524 2.55 6.78571C2.55 6.51619 2.78195 6.26429 3.11111 6.26429C3.44027 6.26429 3.67222 6.51619 3.67222 6.78571C3.67222 6.89716 3.63426 7.00252 3.56504 7.09195Z"
      />
    </svg>
  );
};
