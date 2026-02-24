import { wineryLogos } from "../assets/logos";
import { Country } from "./types";

export const MOCK_DATA: Country[] = [
    {
        countrySlug: 'spain',
        countryName: '스페인',
        wineries: [
            {
                winerySlug: 'costers-del-siurana',
                wineryName: 'Costers del Siurana',
                wineryTitle: 'Clos de L’Obac (클로스 데 로박) \n 스페인의 숨겨진 보석',
                wineryDescription: "스페인 Catalunya(카탈루냐) 남서부 Priorat(프리오랏) 지역의 르네상스를 이끈 상징적인 와이너리입니다. 프리오랏은 스페인에서 단 두 곳 - Rioja, Priorat - 만이 획득한 최고 등급인 DOCa(혹은 DOQ)를 받은 와인 산지입니다.\n\n Costers del Siurana 또는 Clos de L`Obac 와이너리는 1987년 기자 출신 Carles Pastrana와 와인양조가인 아내 Mariona Jarque 가족에 의해 Gratallops(그라탈롭스) 마을에 설립되었습니다. 당시 황폐해져 가던 이 지역의 오래된 13세기 카르투시오 수도원 포도밭을 되찾고, 국제 시장에 내놓을 만한 고품질 와인을 생산하겠다는 거의 불가능해 보이는 목표를 가지고 프리오랏 르네상스를 주도한 Pioneers(개척자들) 중 한 곳으로 참여했습니다.\n\n소량 생산의 테루아 중심 대표 와인이자 진정한 프리오랏 개척자이자 현대적 부흥을 이끈 주역 중 대표자로 꼽히며 프리오랏 지역의 대지주입니다. 첫 빈티지 이후 단 한 번도 변하지 않은 블렌딩 비율과 험준한 리코렐라 슬레이트 토양에서 비롯된 개성을 병에 담아냅니다. 매년 극히 한정된 수량으로만 출시되며, 전세계 컬렉터들에게 컬트와인으로 손꼽히고, 세계 정상급 소믈리에와 미슐랭 스타 및 파인 다이닝 레스토랑에서 인정받고 있습니다.",
                region: 'Priorat',
                regionKR: '프리오랏',
                bgImageUrl:'/images/closdelobacbg.png',
                logoUrl: "/images/clos-de-lobac.svg",
                wines: [
                    {
                        wineSlug: "clos-de-lobac",
                        name: "Clos de l'Obac",
                        nameKR: "클로스 데 로박",
                        vintage: "2003, 2006~15",
                        grape: '그르나슈, 카베르네 소비뇽, 시라, 메를로, 까리녜냐',
                        alcohol: '14.5%',
                        recommendedPairing: '랍스터, 정어리, 고등어과 소고기, 양고기, 오리, 닭, 그릴하거나 진하고 스파이시한 소스를 곁들인 육류, 숙성된 하드 치즈',
                        description: '와이너리의 시그니처 와인. 전통적인 프리오랏의 품종과 국제 품종을 매해 같은 비율로 블렌딩해서 만든 와인이며, 포도밭의 다양한 고도와 방향의 특성을 모두 담아냅니다. 비범한 힘, 구조, 복합성을 지녀 긴 숙성 잠재력을 가집니다. 프렌치 오크 배럴에서 12개월간 숙성 후, 병에서 장기간 숙성 되어 출시됩니다. 와이너리의 이름을 대표하며, 프리오랏 르네상스의 상징과도 같은 와인입니다.',
                        tastingNote: '체리, 블루베리, 블랙커런트, 허브, 스모크, 초콜릿 노트가 어우러진 스파이시 플로럴 아로마',
                        imageUrl: '/images/closdelobac.svg',
                        tasteProfile: {
                            body: 5,
                            tannin: 5,
                            acidity: 4,
                            sweetness: 1.5,
                        }
                    },
                    {
                        wineSlug: "miserere",
                        name: "Miserere",
                        nameKR: "미세레레",
                        vintage: "2005~2014",
                        grape: "그르나슈, 카베르네 소비뇽, 템프라니요, 메를로, 까리녜냐",
                        alcohol: '14.5%',
                        recommendedPairing: '고급 스테이크등의 육류, 버섯 리조또나 트러플이 가미된 요리, 단단한 치즈(체다, 만체고), 진한 소스의 파스타, 푸아그라',
                        description: "Miserere - '자비를 베푸소서' \n D.O.Q. 전체에서 가장 훌륭한 리코레야(Llicorella) 토양 중 하나에 심어진 이 다섯가지 품종은 Miserere에게 진정한 프리오랏 와인을 정의하는 강력한 구조감과 힘을 희생하지 않으면서도, 국제 시장에서 접할 수 있는 숙성 가능한 와인 중 가장 우아한 와인 중 하나라는 영예를 선사합니다.",
                        tastingNote: '레드와 다크베리, 카시스, 리코리스, 초콜릿, 허브, 스파이스의 프로럴하고 프루티한 노트',
                        imageUrl: '/images/miserere.svg',
                        tasteProfile: {
                            body: 4.5,
                            tannin: 4,
                            acidity: 4,
                            sweetness: 1,
                        }
                    },
                    {
                        wineSlug: "kyrie",
                        name: "Kyrie",
                        nameKR: "끼리예",
                        vintage: "2023, 2024",
                        grape: "35% 그르나슈 블랑카, 30% 마카부, 30% 샤렐로, 5% 알렉산드리아 무스캇",
                        alcohol: "13.5%",
                        recommendedPairing: '캐비아, 랍스터, 크랩, 크림소스 요리, 로스트 치킨, 해산물, 콤테 치즈',
                        description: "Kyrie - '주님' \n Clos de L'Obac 와이너리의 시그니처 화이트입니다. Mas d'en Bruno 밭의 낮은 지대에 남향으로 위치한 작은 Kyrie 포도밭은 카탈루냐의 네 가지 클래식 화이트 품종으로 구성되어 있습니다. 네 가지 품종의 최적의 숙성 상태와 가벼운 침용을 거쳐 뛰어난 구조감, 복합성, 그리고 절묘한 섬세함을 갖춘 와인입니다. 새 프렌치 오크 베럴에서 발효 및 6개월간의 숙성을 거치며, 알코올 도수가 높고 산도가 낮아 장기 숙성 잠재력이 뛰어난 헤비한 화이트 와인으로 연간 약 3,500병 정도만 생산되는 컬렉터 와인입니다.",
                        tastingNote: "골든 옐로우/엠버 컬러, 배, 노란 사과, 견과류, 짚, 마지판, 꿀, 버터 터치, 달콤한 스파이스의 아로마",
                        imageUrl: '/images/kyrie.svg',
                        tasteProfile: {
                            body: 4,
                            tannin: 1,
                            acidity: 3,
                            sweetness: 1,
                        }
                    },
                    {
                        wineSlug: "usatges-negre",
                        name: "Usatges Negre",
                        nameKR: "우삿게스 네그레",
                        vintage: "2024",
                        grape: "그르나슈, 카베르네 소비뇽, 시라, 메를로, 까리녜냐, 템프라니요 (*매해 비율이 다름)",
                        alcohol: "14%",
                        recommendedPairing: '모든 육류와 간단한 그릴요리, 초리소 타파스, 토마토 파스타, 피자',
                        description: "Usatges Negre - 카탈루냐의 법도 \n 순수하고 집중적인 과일 풍미를 제공하며, 복합적인 프리오랏 와인의 특징인 단단한 구조감과 우아한 타닌을 지니고 있는 와인입니다. 이는 전통적인 카탈루냐 법처럼, 시대를 초월하는 프리오랏 레드 와인의 고전적인 표준을 제시합니다.",
                        tastingNote: "미디움 가넷 레드 컬러, 카시스 블랙체리 베리류의 과실향과 약간의 미네랄리티, 신선한 산미",
                        imageUrl: '/images/usatgesnegre.svg',
                        tasteProfile: {
                            body: 3.5,
                            tannin: 3,
                            acidity: 3,
                            sweetness: 2,
                        }
                    },
                    {
                        wineSlug: "usatges-blanc",
                        name: "Usatges Blanc",
                        nameKR: "우삿게스 블랑",
                        vintage: '2024',
                        grape: "마카부, 샤렐로, 알렉산드리아 무스캇, 그르나슈 블랑카",
                        alcohol: "13.5%",
                        recommendedPairing: '해산물(조개, 오징어), 가벼운 생선 요리, 샐러드, 부드러운 치즈(브리, 카망베르), 가벼운 가금유 요리',
                        description: "Usatges Blanc - 카탈루냐의 법도 \n Usatges Blanc은 프리오랏의 전통적인 화이트 와인 생산 방식을 계승하고 그 가치를 기리는 와인입니다. 이 지역에서 화이트 와인 생산은 상대적으로 희소하며, 품질에 대한 와이너리의 헌신을 보여줍니다. 새 오크를 사용하여 복합성을 더하는 다른 와인들과 달리, 이 와인은 순수함과 신선함에 초점을 맞추어 양조됩니다. 와인은 균형 잡힌 산도와 섬세한 아로마, 그리고 긴 여운을 가지며, 프리오랏의 떼루아가 만들어내는 희귀하고 우아한 화이트 와인의 매력을 선사합니다.",
                        tastingNote: "화이트 시트러스 컬러, 화이트 피치, 사과, 배, 플라워, 그린 허브, 오렌지 껍질, 페이스트리 아로마",
                        imageUrl: '/images/usatgesblanc.svg',
                        tasteProfile: {
                            body: 3.5,
                            tannin: 1,
                            acidity: 4,
                            sweetness: 1,
                        }
                    },
                    {
                        wineSlug: "lescarpat",
                        name: "L'Escarpat",
                        nameKR: "레슈카르팟트",
                        vintage: '2024',
                        grape: "샤렐로, 미카부",
                        alcohol: '14%',
                        recommendedPairing: '',
                        description: "Costers del Siurana 와이너리의 프리미엄 화이트와인으로 연간 601병만 생산됩니다. 와이너리의 특정 경사 포도밭(L'Escarpart)의 테루아를 반영한 최고급 싱글 빈야드 와인으로, 매우 농축된 파워와 응집력을 가지고 있습니다. 복합적이고 구조적인 특성, 미네랄리티와 과실 향의 환상적인 균형이 특징입니다. 전형적인 프리오랏의 우아함과 숙성력이 극대화된 마스터피스 와인으로 볼 수 있습니다.",
                        tastingNote: " ",
                        imageUrl: '/images/lescarpat.svg',
                        tasteProfile: {
                            body: 5,
                            tannin: 5,
                            acidity: 4.5,
                            sweetness: 1,
                        }
                    }
                ]
            },
            {
                winerySlug: "bodega-el-capricho",
                wineryName: "Bodega El Capricho",
                wineryTitle: 'Bodega El Capricho [보데가 엘카프리초] \n 미식의 거장, José Gordón의 두 번째 열정',
                wineryDescription: "Bodega El Capricho의 시작은 미식계의 거장, José Gordón (호세 고르돈) 셰프입니다. 그는 자신의 스테이크 하우스 엘 카프리초(El Capricho)를 '죽기전에 꼭 가봐야할 세계 최고의 스테이크 성지'로 만들었습니다.\n최고 품질을 추구하는 호세 셰프는 자신의 육류 요리와 완벽하게 조화될 와인을 직접 만들겠다는 열정으로 와이너리를 설립했습니다.\n\nBodega El Capricho의 역사는 호세 셰프의 증조부인 Segundo Gordón (세군도 고르돈)이 20세기 초에 만든 전통적인 와인 저장고에서 시작됩니다.\n호세 고르돈은 가족의 유산과 주변의 방치된 노령 포도밭을 복원하는데 주력했습니다. 그는 평균 80년 이상된 포도나무들의 잠재력을 확신했으며, 이를 통해 자신의 품질 철학이 담긴 와인을 빚어냈습니다.\n\n약 20 헥타르의 포도밭(주요 품종: 멘시아)에서 품질을 위해 연간 약 30,000병 정도의 극히 제한된 수량만 생산합니다. 최소한의 개입과 장인 정신으로 떼루아의 고유한 특성을 와인에 담아내며 2024년부터 유기농인증을 목표로 생산하기 시작했습니다.\n\nBodega El Capricho의 와인은 호세 고르돈의 명성과 함께, 대가족의 역사와 최상의 품질을 향한 타협 없는 추구를 상징합니다.",
                region: "Jiménez de Jamuz (León)",
                regionKR: "레온",
                bgImageUrl:"/images/elcaprichobg.jpg",
                logoUrl: '/images/el-capricho.png',
                wines: [
                    {
                        wineSlug: "valdecedin",
                        name: "Valdecedín",
                        nameKR: "발데세딘",
                        vintage: '2020',
                        grape: "멘시아",
                        alcohol: "14%",
                        recommendedPairing: '',
                        description: "와이너리에서 가장 높은 고도(800m 이상)의 100년 된 구획에서 생산됩니다. 극히 제한된 생산량(연간 500~1200병 내외)을 자랑하며, 진중하고 장기 숙성 잠재력이 뛰어난 와인입니다.",
                        tastingNote: "같은 색조의 반사광을 띄는 루비 레드 색이며, 영한 붉은 과일(자두,라즈베리)과 올스파이스 같은 향신료, 그리고 바닐라 뉘앙스를 지닙니다. 미디엄 플러스의 산도와 섬세하거나 젠틀한 탄닌을 보이며, 벨벳처럼 길게 이어지는 여운으로 마무리됩니다.",
                        imageUrl: '/images/valdecedin.svg',
                        tasteProfile: {
                            body: 4,
                            tannin: 4,
                            acidity: 4,
                            sweetness: 1,
                        }
                    },
                    {
                        wineSlug: "vino-blanco",
                        name: "Vino Blanco",
                        nameKR: "비노 블랑코",
                        vintage: '2020',
                        grape: "Palomino, Dona Blanca",
                        alcohol: "12.6%",
                        recommendedPairing: '',
                        description: "엘카프리초 와이너리의 유일한 화이트 와인이며 평균 수령 80년의 포도나무에서 생산됩니다. Viña de la Uta라는 이름으로도 알려져 있으며, 이름 그대로 '우타(Uta)의 포도밭' 에서 나온 화이트 와인으로 매우 과실미가 풍부하고 즐거운 스타일의 와인입니다. 연간 1200병만 생산하며, 6개월간 프렌치 오크통에서 숙성됩니다.",
                        tastingNote: "중간 정도의 농도를 지닌 연둣빛이 도는 노란색을 띄며, 잘 익은 스톤 프루트(핵과)와 견과류 아로마가 코와 입안에서 그대로 이어지는 풍미를 보여주고, 과실미가 강렬하면서도 길게 지속되는 여운을 지녔으며, 숙성 잠재력은 5~8년입니다.",
                        imageUrl: '/images/vinoblanco.svg',
                        tasteProfile: {
                            body: 3,
                            tannin: 1,
                            acidity: 3.5,
                            sweetness: 1.5,
                        }
                    },
                    {
                        wineSlug: "el-chano",
                        name: "El Chano",
                        nameKR: "엘 차노",
                        vintage: '2020',
                        grape: "Mencia, Garnacha Tintoera, Prieto Picudo, Palomino",
                        alcohol: "14%",
                        recommendedPairing: '붉은 육류의 스테이크',
                        description: "100년 이상된 포도나무에서 수확된 포도로 제작되며, 붉은 과실미와 야생의 아로마가 돋보이는 섬세하고 우아한 스타일의 와인입니다. 새 프렌치 오크통에서 12개월간 숙성됩니다. 연간 약 15,000병만 생산하며 엘 카프리초의 스테이크와 같은 붉은 육류와 완벽한 페어링을 이룹니다.",
                        tastingNote: "루비 레드에 옅은 림(rim)을 띄며, 잘익은 레드 및 블랙베리 아로마와 함께 클로브와 바닐라 같은 스파이스 뉘앙스가 느껴지고, 중간정도의 산도와 라운드한 타닌을 지녔으며, 미디움 길이의 프루티한 피니쉬로 끝납니다.",
                        imageUrl: '/images/elchano.svg',
                        tasteProfile: {
                            body: 3,
                            tannin: 3,
                            acidity: 3,
                            sweetness: 1.5,
                        }
                    },
                    {
                        wineSlug: "la-perla",
                        name: "La Perla",
                        nameKR: "라 페를라",
                        vintage: "2020",
                        grape: "",
                        alcohol: "13.5%",
                        recommendedPairing: "",
                        description: "'그 타르타르를 긁어내지 마라!'\n 호두나무 오크통 작업을 할 때면 아버지는 늘 제게 말씀하시곤 했습니다. 오크통 안으로 기어 들어가 보면, 마치 맑은 여름밤의 우주를 관찰하는 것만 같았죠. 타르타르 때문인지 얇게 형성된 그 층은 아주 특별한 빛을 내뿜으며 오크통의 나무로부터 와인을 섬세하게 격리해 주었습니다.\n 그 통은 할아버지 세군도 고르돈(Segundo Gordón)이 일군 가장 높은 지대의 포도밭에서 수확한 프리에토 피쿠도와 멘시아 품종들로 채워졌습니다. 발효는 천천히, 그러나 강렬하게 일어났고, 그 결과 신선하고 가벼우면서도 벨벳 같은 우아함을 지닌, 마시기 편한 와인이 탄생했습니다.\n 아마도 아버지가 그 오크통에 La Perla(진주)라는 이름을 붙이신 건, 그 통이 우리의 가장 큰 희망이었기 때문일 것입니다.",
                        tastingNote: "",
                        imageUrl: "/images/laperla.svg",
                        tasteProfile: {
                            body: 3,
                            tannin: 3,
                            acidity: 3,
                            sweetness: 3,
                        }
                    },
                    {
                        wineSlug: "la-majada",
                        name: "La Majada",
                        nameKR: "라 마하다",
                        vintage: "2022",
                        grape: "멘시아, 가르나챠, 프리에토 피쿠토",
                        alcohol: "14%",
                        recommendedPairing: "",
                        description: "이 와인은 대부분 100년이 넘는 오래된 포도밭을 되살려 만든 결과물입니다. 전통적인 유기농법으로 재배된 이 포도밭에서는 멘시아, 가르나차, 프리도 피쿠도 품종의 포도가 생산됩니다. 그 결과, 잘 익은 붉은 과일과 야생적인 향이 돋보이는 섬세하고 과일향이 풍부한 와인이 탄생했습니다. 프랑스산 오크통에서 12개월 동안 숙성된 이 와인은 육류 요리와 완벽한 조화를 이룹니다.",
                        tastingNote: "",
                        imageUrl: "/images/lamajada.svg",
                        tasteProfile: {
                            body: 3,
                            tannin: 3,
                            acidity: 3,
                            sweetness: 3,
                        }
                    }
                ]
            }
        ]
    },
     {
        countrySlug: 'japan',
        countryName: '일본',
        wineries: [],
        // TODO: Hamada Vineyard 와인 들여오면 데이터 추가
        // wineries: [
        //     {
        //         winerySlug: "hamada-vineyard",
        //         wineryName: "Hamada Vineyard",
        //         wineryTitle: "Hamada Vineyard",
        //         wineryDescription: "홋카이도 미카사시의 완만한 구릉에 자리잡은 하마다 빈야드는 과학의 정밀함과 자연의 생명력이 조화를 이루는 가족 경영 와이너리입니다. 설립자 하마다 히로후미 대표는 도쿄대 의학부를 졸업하고 30년 넘게 암 신약 개발을 연구해온 의학 박사로, 평생을 바친, '생명의 탐구'를 이제 대지 위에서 와인으로 꽃피우고 있습니다.\n그는 암세포를 분석하던 치밀한 연구 정신을 포도밭에 투영하여, 미카사 테루아에 최적화된 재배 환경을 과학적으로 구축해냈습니다. 현재는 아들이자 차세대 양조가인 하마다 레오가 합류하여, 아버지가 일군 정교한 토대 위에 야생 효모 발효와 최소한의 개입이라는 자연주의 양조 철학을 더해 독창적인 와인을 빚어냅니다.\n하마다 빈야드의 와인은 홋카이도의 서늘한 기후가 선사하는 맑은 산미와 더불어, 긴 연구의 세월만큼이나 깊고 우아한 복합미를 자랑합니다. 특히 이곳의 샤르도네와 피노 누아는 포도 본연의 순수한 에너지를 정교하게 담아내어, 마시는 이에게 깊은 위로와 감동을 선사합니다.\n나아가 2026년 봄에는 빈야드 내 복합 미식 공간인 '에카라(Ekara)'를 새롭게 오픈하여, 자사 와인과 지역 식재료가 어우러진 최상의 미식 경험을 제공할 예정입니다. 세계적인 석학의 탐구 정신과 가족의 정성이 빚어낸 특별한 한 잔, 하마다 빈야드에서 사람과 대지를 향한 진심 어린 존중을 만나보시기 바랍니다.",
        //         region: "Hokkaido",
        //         regionKR: "홋카이도",
        //         bgImageUrl: "/images/IMG_2942.jpg",
        //         logoUrl: "",
        //         wines: [
        //             {
        //                 wineSlug: "hamada-blanc",
        //                 name: "Blanc",
        //                 vintage: "2023",
        //                 grape: "소비뇽 블랑, 샤르도네, 피노 그리, 리슬링, 케르너, 뮐러 트루가우, 피노 블랑, 세이벨, 몬트브라이트",
        //                 alcohol: "11.5% ~ 12.5%",
        //                 recommendedPairing: "",
        //                 description: "하마다 빈야드의 포도밭인 '타푸'의 전체적인 조화를 보여주는 화이트 와인입니다. 단일 품종 와인보다 복합미가 뛰어나며, 과실의 풍부함과 꽃향기, 그리고 홋카이도 대지의 미네랄이 균형 있게 어우러져 있습니다. 빈티지에 따라 블렌딩 비율이 달라지며, 빈야드의 그해 작황을 가장 잘 대변하는 와인입니다.",
        //                 tastingNote: "",
        //                 imageUrl: "/images/hamada-blanc-v3.png",
        //                 tasteProfile: {
        //                     body: 3,
        //                     tannin: 3,
        //                     acidity: 3,
        //                     sweetness: 1
        //                 }
        //             },
        //             {
        //                 wineSlug: "hamada-bacchus",
        //                 name: "Bacchus",
        //                 vintage: "2021, 2023, 2024",
        //                 grape: "바쿠스",
        //                 alcohol: "10.5% ~ 11.5%",
        //                 recommendedPairing: "해산물 요리",
        //                 description: "하마다 빈야드가 위치한 홋카이도 소라치 지역에서 특히 빛을 발하는 품종입니다. 낮은 알코올 도수와 신선한 산미 덕분에 와인 입문자부터 전문가까지 두루 선호하는 경쾌한 화이트 와인입니다.",
        //                 tastingNote: "머스캣, 라임, 갓 벤 풀 향",
        //                 imageUrl: "/images/hamada-bacchus.webp",
        //                 tasteProfile: {
        //                     body: 2,
        //                     tannin: 2,
        //                     acidity: 2,
        //                     sweetness: 2
        //                 }
        //             },
        //             {
        //                 wineSlug: "hamada-sauvignon-blanc",
        //                 name: "Sauvignon Blanc",
        //                 vintage: "2021",
        //                 grape: "소비뇽 블랑",
        //                 alcohol: "12.0% ~ 12.5%",
        //                 recommendedPairing: "신선한 해산물 요리",
        //                 description: "뉴질랜드 스타일의 강렬함보다는 미카사의 서늘한 기우를 닮은 섬세하고 정교한 와인입니다.",
        //                 tastingNote: "자몽, 패션프루트와 같은 시트러스향과 함께 특유의 허브 향(레몬그라스), 미네랄리티",
        //                 imageUrl: "/images/hamada-sauvignon-blanc.webp",
        //                 tasteProfile: {
        //                     body: 2,
        //                     tannin: 2,
        //                     acidity: 2,
        //                     sweetness: 2
        //                 }
        //             },
        //             {
        //                 wineSlug: "hamada-chardonnay",
        //                 name: "Chardonnay",
        //                 vintage: "2021",
        //                 grape: "샤르도네",
        //                 alcohol: "12.5% ~ 13.0%",
        //                 recommendedPairing: "",
        //                 description: "'일본의 뫼르소'라는 별칭이 가장 잘 어울리는 와인입니다. 하마다 빈야드의 모든 기술력과 테루아에 대한 해석이 응집된 시그니처 와인입니다. 묵직한 볼륨감과 우아한 질감이 특징이며, 숙성 잠재력이 매우 높은 하이엔드급 와인입니다.",
        //                 tastingNote: "단순한 과실향에 머물지 않은, 세밀한 오크 숙성을 통해 얻은 구운 견과류, 버터, 꿀의 풍미가 압도적인 복합미를 형성",
        //                 imageUrl: "/images/hamada-chardonnay.webp",
        //                 tasteProfile: {
        //                     body: 4,
        //                     tannin: 2,
        //                     acidity: 3,
        //                     sweetness: 1
        //                 }
        //             },
        //             {
        //                 wineSlug: "hamada-rouge",
        //                 name: "Rouge",
        //                 vintage: "2023",
        //                 grape: "피노 누아, 츠바이겔트 등",
        //                 alcohol: "12.0% ~ 13.0%",
        //                 recommendedPairing: "",
        //                 description: "하마다 빈야드에서 재배되는 모든 레드 와인용 포도를 블렌딩한 우아한 와인입니다. 피노 누아 특유의 투명하고 맑은 루비 색상과 산딸기, 체리 같은 붉은 과실 향이 중심을 잡습니다. 타닌은 매우 부드럽고 실키하며, 인위적인 힘보다는 자연스러운 깊이감과 여운을 강조한 스타일입니다",
        //                 tastingNote: "",
        //                 imageUrl: "",
        //                 tasteProfile: {
        //                     body: 3,
        //                     tannin: 3,
        //                     acidity: 3,
        //                     sweetness: 1
        //                 }
        //             },
        //             {
        //                 wineSlug: "hamada-pinot-noir",
        //                 name: "Pinot Noir",
        //                 vintage: "2024",
        //                 grape: "피노 누아",
        //                 alcohol: "12.0% ~ 13.0%",
        //                 recommendedPairing: "",
        //                 description: "하마다 빈야드의 정체성을 상징하는 품종입니다. 인위적인 오크 터치를 절제하여 피노 누아 본연의 섬세한 산미와 부드러운 타닌을 강조합니다. 의사 부부의 세심한 포도밭 관리와 아들의 자연주의 양조가 만나, 일본 피노 누아 중에서도 손꼽히는 정교한 밸런스를 보여준다는 평을 듣습니다.",
        //                 tastingNote: "맑고 투명한 루비 빛깔, 산딸기, 체리, 야생 딸기 같은 붉은 과실의 순수한 향",
        //                 imageUrl: "/images/hamada-pinot-noir.webp",
        //                 tasteProfile: {
        //                     body: 3,
        //                     tannin: 3,
        //                     acidity: 3,
        //                     sweetness: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]
    },
    {
        countrySlug: 'france',
        countryName: '프랑스',
        wineries: [],
    },
]