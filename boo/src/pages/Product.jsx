import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`

`;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;

const ImageContainer = styled.div`
    flex: 1;

`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;  

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;  
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
    font-size: 15px;
    
`;


const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}`;



export default function Product() {
    const navigate = useNavigate(); 
    return (
        <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImageContainer>
                <Image src='https://www.printingonshirts.co.il/wp-content/uploads/2019/10/%D7%97%D7%95%D7%9C%D7%A6%D7%94-%D7%A7%D7%A6%D7%A8%D7%94-%D7%A9%D7%97%D7%95%D7%A8%D7%94-%D7%92%D7%91.jpg' />
            </ImageContainer>
            <InfoContainer>
                <Title>Tshirt</Title>
                <Desc>asdas</Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='darkblue' />
                        <FilterColor color='gray' />
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor:'pointer'}} />
                        <Amount>1</Amount>
                        <Add style={{cursor:'pointer'}}/>
                    </AmountContainer>
                    <Button onClick={() => navigate('/Cart')}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
    )
}
