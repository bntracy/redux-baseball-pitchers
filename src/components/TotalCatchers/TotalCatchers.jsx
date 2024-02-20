import { useSelector } from 'react-redux';

function TotalCatchers() {
    const catcherList = useSelector(store => store.catcherList);
    return (<div>Total Pitchers: {catcherList.length}</div>);
}

export default TotalCatchers;