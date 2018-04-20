export function selectTab(tabId){
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

//neste exemplo ...tabIds não é spread e sim o rest, que irá juntar os vários valores passados por paraâmetro em um array
export function showTabs(...tabIds){
    const tabsToShow = {} //notação literal para criação de objeto vazio
    tabIds.forEach(e => tabsToShow[e] = true) //incluindo um novo atributo no objeto, ficará assim tabsToShow{'tabList': true}
    return{
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}