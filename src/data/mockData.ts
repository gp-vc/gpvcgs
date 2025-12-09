import { Country } from "./types";

export const MOCK_DATA: Country[] = [
    {
        countrySlug: 'spain',
        countryName: '스페인',
        wineries: [
            {
                winerySlug: 'Costers%20del%20Siurana',
                wineryName: 'Costers del Siurana',
                region: 'Priorat',
                bgImageUrl:'/images/closdelobacbg.jpg',
                wines: [
                    {
                        wineSlug: "Clos%20de%20l'Obac",
                        name: "Clos de l'Obac",
                        vintage: "2003, 2006~15",
                        grape: '35% 그르나슈, 35% 카베르네 소비뇽, 10% 시라, 10% 메를로, 10% 까리녜냐',
                        alcohol: '14.5%',
                        rating: '4.5',
                        description: '와이너리의 시그니처 와인. \n7개 포도밭에서 수확한 포도로 만들어지며 프리오랏의 전형적인 리코렐라(검은 슬레이트) 토양에서 비롯된 미네랄리티와 강렬한 구조가 특징.\n12개월간 프렌치 오크통에서 숙성 후 병입. 병 오픈 후 시간이 지나야 같은 풍미로 진화. 부드러운 타닌과 긴 피니시, 높은 산도와 균형 잡힌 초콜릿 뉘앙스가 돋보임.',
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
                        wineSlug: "Miserere",
                        name: "Miserere",
                        vintage: "2005~2014",
                        grape: "27% 그르나슈, 27% 카베르네 소비뇽, 26% 템프라니요, 10% 메를로, 10% 까리녜냐",
                        alcohol: '14.5%',
                        rating: '4.2',
                        description: 'Mas den Bruno 포도밭의 40년 이상(~80년) 된 오래된 포도나무와 프리오랏에서 가장 오래된 Cabernet Sauvignon 포도나무에서 생산.\n 14개월간 프렌치 오크통에서 숙성 - 프리오랏 와인의 강렬한 구조와 우아함을 동시에 보여주며, 숙성 잠재력이 뛰어남. 벨벳처럼 부드러운 타닌과 긴 여운, 섬세하고 복합적인 풍미가 특징',
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
                        wineSlug: "Kyrie",
                        name: "Kyrie",
                        vintage: "2023, 2024",
                        grape: "35% 그르나슈 블랑카, 30% 마카부, 30% 샤렐로, 5% 알렉산드리아 무스캇",
                        alcohol: "13.5%",
                        rating: '4.3',
                        description: "10년 이상 숙성 과정에서 오는 시트러스, 살구, 파인애플, 캬라멜, 시더, 브리오슈의 풍미, 중간 이상 산도와 풀바디의 구조감과 밀키한 질감. 신맛이 적고 복합적인 풍미가 긴 여운을 남기는 오크 숙성 화이트 와인",
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
                        wineSlug: "Usatges%20Negre",
                        name: "Usatges Negre",
                        vintage: "2024",
                        grape: "그르나슈, 카베르네 소비뇽, 시라, 메를로, 까리녜냐, 템프라니요 (*매해 비율이 다름)",
                        alcohol: "14%",
                        rating: "3.9",
                        description: "Clos de l'Obac보다 좀 더 일상에서 접근하기 쉬운 스타일. 중간 정도의 바디감과 매끄러운 타닌을 지녔으며, 과실의 풍미가 중심을 잡는 균형감이 뛰어난 와인",
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
                        wineSlug: "Usatges%20Blanc",
                        name: "Usatges Blanc",
                        vintage: '2024',
                        grape: "60% 마카부, 20% 샤렐로, 15% 알렉산드리아 무스캇, 5% 그르나슈 블랑카",
                        alcohol: "13.5%",
                        rating: "4.0",
                        description: "Kyrie 생산에 사용되지 않은 포도로 만들어진 엔트리급 화이트 와인. Stainless Steel 탱크에서 6개월간 숙성. 오크의 영향이 적어 신선함을 강조. 프리오랏에서 찾기 힘든 보석 같은 드라이 화이트 와인. 복합적인 아로마(꽃, 과일, 미네랄), 균형 잡힌 산도, 미묘한 오크 뉘앙. 중간 이상의 바디와 산도, 약간 기름진 질감, 화이트 과실과 중간 이상의 긴 피니쉬",
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
                        wineSlug: "L'Escarpart",
                        name: "L'Escarpart",
                        vintage: '2024',
                        grape: "샤렐로, 미카부",
                        alcohol: '14%',
                        rating: '4.5',
                        description: "Costers del Siurana 와이너리의 프리미엄 화이트와인으로 연간 601병만 생산. 와이너리의 특정 경사 포도밭(L'Escarpart)의 테루아를 반영한 최고급 싱글 빈야드 와인으로, 매우 농축된 파워와 응집력을 가지고 있다. 복합적이고 구조적인 특성, 미네랄리티와 과실 향의 환상적인 균형이 특징. 전형적인 프리오랏의 우아함과 숙성력이 극대화된 마스터피스",
                        tastingNote: "None",
                        imageUrl: '/images/lescarpart.png',
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
                winerySlug: "Bodega%20El%20Capricho",
                wineryName: "Bodega El Capricho",
                region: "Leon",
                bgImageUrl:"/images/elcaprichobg.jpg",
                wines: [
                    {
                        wineSlug: "Valdecedin",
                        name: "Valdecedin",
                        vintage: '2020',
                        grape: "100% 멘시아",
                        alcohol: "14%",
                        rating: "4.3",
                        description: "레온 고원의 해발 850m, 백년 포도밭에서 자란 멘시아. 클레이와 화강암, 석영 미네랄이 만들어낸 깊이와 균형. 14개월간 프렌치 오크에 숙성. 루비빛 컬러에 붉은 과일, 바닐라, 스파이스 향. 섬세한 탄닌과 긴 벨벳같은 여운이 남는다",
                        tastingNote: "None",
                        imageUrl: '/images/valdecedin.png',
                        tasteProfile: {
                            body: 4,
                            tannin: 4,
                            acidity: 4,
                            sweetness: 1,
                        }
                    },
                    {
                        wineSlug: "Vino%20Blanco",
                        name: "Vino Blanco",
                        vintage: '2020',
                        grape: "Palomino, Dona Blanca",
                        alcohol: "12.6%",
                        rating: "3.9",
                        description: "레온의 해발 고지에서 자란 팔로미노와 도냐 블랑카. 6개월간 프렌치 오크와 리스 접촉으로 완성된 구조감. 잘 익은 스톤프루트와 견과의 아로마. 풍부한 질감 속 긴 피니시가 이어진다.",
                        tastingNote: "None",
                        imageUrl: '/images/vinoblanco.png',
                        tasteProfile: {
                            body: 3,
                            tannin: 1,
                            acidity: 3.5,
                            sweetness: 1.5,
                        }
                    },
                    {
                        wineSlug: "El%20Chano",
                        name: "El Chano",
                        vintage: '2020',
                        grape: "Mencia, Garnacha Tintoera, Prieto Picudo, Palomino",
                        alcohol: "14%",
                        rating: "4.0",
                        description: "가문의 이름을 딴 와인, 엘 차노. 백년 포도밭의 힘과 따뜻한 전통이 담겼다. 12개월간 프렌치 오크에 숙성. 잘 익은 붉은 과실과 블랙베리, 바닐라와 클로브의 향. 부드러운 산도와 라운드한 탄닌이 어루어진 중간 바디",
                        tastingNote: "None",
                        imageUrl: '/images/elchano.png',
                        tasteProfile: {
                            body: 3,
                            tannin: 3,
                            acidity: 3,
                            sweetness: 1.5,
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