
import Image from "next/image";

import chevronDown from "/public/icons/chevron_down_small.svg";

export default function StoreRanking() {
    // 파베에서 불러온 데이터로 변경 예정
    var rankingData = [
        { "점포명": "갈현동할머니 떡볶이", "분류": "분식" },
        { "점포명": "갈현동할머니 떡볶이", "분류": "분식" },
        { "점포명": "갈현동할머니 떡볶이", "분류": "분식" },
        { "점포명": "갈현동할머니 떡볶이", "분류": "분식" },
        { "점포명": "갈현동할머니 떡볶이", "분류": "분식" },
    ];

    const onMoreClick = () => {

    };

    return (
        <div className="w-11/12 flex flex-col items-center space-y-2  mb-10">
            <h1 className="w-full text-[17px] font-medium text-black mb-2">인기 상점 Top 10</h1>
            {rankingData.map((store, index) => <StoreItem key={index} num={index + 1} storeName={store["점포명"]} category={store["분류"]} />)}
            <div
                onClick={onMoreClick}
                className="w-full h-12 rounded-lg bg-white border border-gray-200 flex flex-row justify-center items-center"
                style={{ boxShadow: '0px 3px 8px 0px rgba(143, 149, 162, 0.25)' }}>
                <h1 className="text-[15px] font-normal text-gray-600">더보기</h1>
                <Image src={chevronDown} width={24} height={24} alt="아이콘" />
            </div>
        </div>
    )
}

function StoreItem({ num, storeName, category }) {
    return (
        <div className="w-full h-12 rounded-lg bg-gray-100 flex flex-row items-center">
            <h1 className="text-[21px] font-medium text-gray-500 ml-4">{num}</h1>
            <h1 className="text-[15px] font-normal text-black grow mx-5">{storeName}</h1>
            <h1 className="text-[13px] font-normal text-gray-600 mr-4">{category}</h1>
        </div>
    )
}