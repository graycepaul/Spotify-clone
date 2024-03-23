import style from './Footer.module.css'


const lists = [
        {title: "COMPANY", items: [{item: "About", id: 0},  {item: "Jobs", id: 1}, {item: "For the Record", id: 2}], id: 1},
        {title: "COMMUNITIES", items: [{item: "For Artists", id: 0},  {item: "Developers", id: 1}, {item: "Advertising", id: 3}, {item: "Investors", id: 4}, {item: "Vendors", id: 5}], id: 2}, 
        {title: "USEFUL LINKS", items: [{item: "Support", id: 0}, {item: "Web Player", id: 1}, {item: "Free Mobile App", id: 2}], id: 3}
];

    const listItemsCompany = [
        {item: "About", id: 0},  {item: "Jobs", id: 1}, {item: "For the Record", id: 2}
    ];
    const listItemsCommunities = [
        {item: "For Artists", id: 0},  {item: "Developers", id: 1}, {item: "Advertising", id: 3}, {item: "Investors", id: 4}, {item: "Vendors", id: 5}
    ];
    const listItemsLinks = [
        {item: "Support", id: 0}, {item: "Web Player", id: 1}, {item: "Free Mobile App", id: 2}
    ];


    export const Info = (props) => {
        return (
            <div className={style.info}>
                {lists.map((list) => {
                    let itemsList;
                    if (list.title === "COMPANY") {
                        itemsList = listItemsCompany.map((item) => (
                            <div className={style.container} key={item.id}>
                                <li>{item.item}</li>
                                <div></div>
                            </div>
                        ));
                    } else if (list.title === "COMMUNITIES") {
                        itemsList = listItemsCommunities.map((item) => (
                            <div className={style.container} key={item.id}>
                                <li>{item.item}</li>
                                <div></div>
                            </div>
                        ));
                    } else if (list.title === "USEFUL LINKS") {
                        itemsList = listItemsLinks.map((item) => (
                            <div className={style.container} key={item.id}>
                                <li>{item.item}</li>
                                <div></div>
                            </div>
                        ));
                    }
    
                    return (
                        <div className={style.container} key={list.id}>
                            <h2>{list.title}</h2>
                            <ul>
                                {itemsList}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    };
    
