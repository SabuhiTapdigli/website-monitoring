import styled from 'styled-components';

const TableHead = () =>{
    return(
        <>
            <Head>
                <div>Username</div>
                <div>Email</div>
                <div>Role</div>
            </Head>
        </>
    )
}
const Head = styled.div`
    display:flex;
    justify-content:space-between;
    text-align:center;
`
export default TableHead