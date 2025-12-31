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
                        vintage: "2003, 2006~15",
                        grape: '그르나슈, 카베르네 소비뇽, 시라, 메를로, 까리녜냐',
                        alcohol: '14.5%',
                        recommendedPairing: '랍스터, 정어리, 고등어과 소고기, 양고기, 오리, 닭, 그릴하거나 진하고 스파이시한 소스를 곁들인 육류, 숙성된 하드 치즈',
                        description: '와이너리의 시그니처 와인. 전통적인 프리오랏의 품종과 국제 품종을 매해 같은 비율로 블렌딩해서 만든 와인이며, 포도밭의 다양한 고도와 방향의 특성을 모두 담아냅니다. 비범한 힘, 구조, 복합성을 지녀 긴 숙성 잠재력을 가집니다. 프렌치 오크 배럴에서 12개월간 숙성 후, 병에서 장기간 숙성 되어 출시됩니다. 와이너리의 이름을 대표하며, 프리오랏 르네상스의 상징과도 같은 와인입니다.',
                        tastingNote: '체리, 블루베리, 블랙커런트, 허브, 스모크, 초콜릿 노트가 어우러진 스파이시 플로럴 아로마',
                        imageUrl: '/images/closdelobac.png',
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
                        vintage: "2005~2014",
                        grape: "그르나슈, 카베르네 소비뇽, 템프라니요, 메를로, 까리녜냐",
                        alcohol: '14.5%',
                        recommendedPairing: '고급 스테이크등의 육류, 버섯 리조또나 트러플이 가미된 요리, 단단한 치즈(체다, 만체고), 진한 소스의 파스타, 푸아그라',
                        description: "Miserere - '자비를 베푸소서' \n D.O.Q. 전체에서 가장 훌륭한 리코레야(Llicorella) 토양 중 하나에 심어진 이 다섯가지 품종은 Miserere에게 진정한 프리오랏 와인을 정의하는 강력한 구조감과 힘을 희생하지 않으면서도, 국제 시장에서 접할 수 있는 숙성 가능한 와인 중 가장 우아한 와인 중 하나라는 영예를 선사합니다.",
                        tastingNote: '레드와 다크베리, 카시스, 리코리스, 초콜릿, 허브, 스파이스의 프로럴하고 프루티한 노트',
                        imageUrl: '/images/miserere.png',
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
                        vintage: "2023, 2024",
                        grape: "35% 그르나슈 블랑카, 30% 마카부, 30% 샤렐로, 5% 알렉산드리아 무스캇",
                        alcohol: "13.5%",
                        recommendedPairing: '캐비아, 랍스터, 크랩, 크림소스 요리, 로스트 치킨, 해산물, 콤테 치즈',
                        description: "Kyrie - '주님' \n Clos de L'Obac 와이너리의 시그니처 화이트입니다. Mas d'en Bruno 밭의 낮은 지대에 남향으로 위치한 작은 Kyrie 포도밭은 카탈루냐의 네 가지 클래식 화이트 품종으로 구성되어 있습니다. 네 가지 품종의 최적의 숙성 상태와 가벼운 침용을 거쳐 뛰어난 구조감, 복합성, 그리고 절묘한 섬세함을 갖춘 와인입니다. 새 프렌치 오크 베럴에서 발효 및 6개월간의 숙성을 거치며, 알코올 도수가 높고 산도가 낮아 장기 숙성 잠재력이 뛰어난 헤비한 화이트 와인으로 연간 약 3,500병 정도만 생산되는 컬렉터 와인입니다.",
                        tastingNote: "골든 옐로우/엠버 컬러, 배, 노란 사과, 견과류, 짚, 마지판, 꿀, 버터 터치, 달콤한 스파이스의 아로마",
                        imageUrl: '/images/kyrie.png',
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
                        vintage: "2024",
                        grape: "그르나슈, 카베르네 소비뇽, 시라, 메를로, 까리녜냐, 템프라니요 (*매해 비율이 다름)",
                        alcohol: "14%",
                        recommendedPairing: '모든 육류와 간단한 그릴요리, 초리소 타파스, 토마토 파스타, 피자',
                        description: "Usatges Negre - 카탈루냐의 법도 \n 순수하고 집중적인 과일 풍미를 제공하며, 복합적인 프리오랏 와인의 특징인 단단한 구조감과 우아한 타닌을 지니고 있는 와인입니다. 이는 전통적인 카탈루냐 법처럼, 시대를 초월하는 프리오랏 레드 와인의 고전적인 표준을 제시합니다.",
                        tastingNote: "미디움 가넷 레드 컬러, 카시스 블랙체리 베리류의 과실향과 약간의 미네랄리티, 신선한 산미",
                        imageUrl: '/images/usatges%20negre.png',
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
                        vintage: '2024',
                        grape: "마카부, 샤렐로, 알렉산드리아 무스캇, 그르나슈 블랑카",
                        alcohol: "13.5%",
                        recommendedPairing: '해산물(조개, 오징어), 가벼운 생선 요리, 샐러드, 부드러운 치즈(브리, 카망베르), 가벼운 가금유 요리',
                        description: "Usatges Blanc - 카탈루냐의 법도 \n Usatges Blanc은 프리오랏의 전통적인 화이트 와인 생산 방식을 계승하고 그 가치를 기리는 와인입니다. 이 지역에서 화이트 와인 생산은 상대적으로 희소하며, 품질에 대한 와이너리의 헌신을 보여줍니다. 새 오크를 사용하여 복합성을 더하는 다른 와인들과 달리, 이 와인은 순수함과 신선함에 초점을 맞추어 양조됩니다. 와인은 균형 잡힌 산도와 섬세한 아로마, 그리고 긴 여운을 가지며, 프리오랏의 떼루아가 만들어내는 희귀하고 우아한 화이트 와인의 매력을 선사합니다.",
                        tastingNote: "화이트 시트러스 컬러, 화이트 피치, 사과, 배, 플라워, 그린 허브, 오렌지 껍질, 페이스트리 아로마",
                        imageUrl: '/images/usatges%20blanc.png',
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
                        vintage: '2024',
                        grape: "샤렐로, 미카부",
                        alcohol: '14%',
                        recommendedPairing: '',
                        description: "Costers del Siurana 와이너리의 프리미엄 화이트와인으로 연간 601병만 생산됩니다. 와이너리의 특정 경사 포도밭(L'Escarpart)의 테루아를 반영한 최고급 싱글 빈야드 와인으로, 매우 농축된 파워와 응집력을 가지고 있습니다. 복합적이고 구조적인 특성, 미네랄리티와 과실 향의 환상적인 균형이 특징입니다. 전형적인 프리오랏의 우아함과 숙성력이 극대화된 마스터피스 와인으로 볼 수 있습니다.",
                        tastingNote: "None",
                        imageUrl: '/images/lescarpat.png',
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
                        name: "Valdecedin",
                        vintage: '2020',
                        grape: "멘시아",
                        alcohol: "14%",
                        recommendedPairing: '',
                        description: "와이너리에서 가장 높은 고도(800m 이상)의 100년 된 구획에서 생산됩니다. 극히 제한된 생산량(연간 500~1200병 내외)을 자랑하며, 진중하고 장기 숙성 잠재력이 뛰어난 와인입니다.",
                        tastingNote: "같은 색조의 반사광을 띄는 루비 레드 색이며, 영한 붉은 과일(자두,라즈베리)과 올스파이스 같은 향신료, 그리고 바닐라 뉘앙스를 지닙니다. 미디엄 플러스의 산도와 섬세하거나 젠틀한 탄닌을 보이며, 벨벳처럼 길게 이어지는 여운으로 마무리됩니다.",
                        imageUrl: '/images/valdecedin.jpg',
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
                        vintage: '2020',
                        grape: "Palomino, Dona Blanca",
                        alcohol: "12.6%",
                        recommendedPairing: '',
                        description: "엘카프리초 와이너리의 유일한 화이트 와인이며 평균 수령 80년의 포도나무에서 생산됩니다. Viña de la Uta라는 이름으로도 알려져 있으며, 이름 그대로 '우타(Uta)의 포도밭' 에서 나온 화이트 와인으로 매우 과실미가 풍부하고 즐거운 스타일의 와인입니다. 연간 1200병만 생산하며, 6개월간 프렌치 오크통에서 숙성됩니다.",
                        tastingNote: "중간 정도의 농도를 지닌 연둣빛이 도는 노란색을 띄며, 잘 익은 스톤 프루트(핵과)와 견과류 아로마가 코와 입안에서 그대로 이어지는 풍미를 보여주고, 과실미가 강렬하면서도 길게 지속되는 여운을 지녔으며, 숙성 잠재력은 5~8년입니다.",
                        imageUrl: '/images/vinoblanco.jpg',
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
                        vintage: '2020',
                        grape: "Mencia, Garnacha Tintoera, Prieto Picudo, Palomino",
                        alcohol: "14%",
                        recommendedPairing: '붉은 육류의 스테이크',
                        description: "100년 이상된 포도나무에서 수확된 포도로 제작되며, 붉은 과실미와 야생의 아로마가 돋보이는 섬세하고 우아한 스타일의 와인입니다. 새 프렌치 오크통에서 12개월간 숙성됩니다. 연간 약 15,000병만 생산하며 엘 카프리초의 스테이크와 같은 붉은 육류와 완벽한 페어링을 이룹니다.",
                        tastingNote: "루비 레드에 옅은 림(rim)을 띄며, 잘익은 레드 및 블랙베리 아로마와 함께 클로브와 바닐라 같은 스파이스 뉘앙스가 느껴지고, 중간정도의 산도와 라운드한 타닌을 지녔으며, 미디움 길이의 프루티한 피니쉬로 끝납니다.",
                        imageUrl: '/images/elchano.png',
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
                        vintage: "2020",
                        grape: "",
                        alcohol: "13.5%",
                        recommendedPairing: "",
                        description: "",
                        tastingNote: "",
                        imageUrl: "/images/laperla.jpg",
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
                        vintage: "2022",
                        grape: "멘시아, 가르나챠, 프리에토 피쿠토",
                        alcohol: "14%",
                        recommendedPairing: "",
                        description: "",
                        tastingNote: "",
                        imageUrl: "/images/lamajada.jpg",
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
        countrySlug: 'france',
        countryName: '프랑스',
        wineries: [],
    },
    {
        countrySlug: 'japan',
        countryName: '일본',
        wineries: [],
    }
]