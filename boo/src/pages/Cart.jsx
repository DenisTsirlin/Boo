import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { useNavigate,useLocation } from 'react-router-dom';


const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Tittle = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    
`;


const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    `;

const TopTexts = styled.div`
`;
const Toptext = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Buttom = styled.div`
    display: flex;
    justify-content: space-between;


`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    `;



const Image = styled.img`
    width: 200px;

`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


`;

const ProductName = styled.span`
`;

const ProductId = styled.span`
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span`
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
    margin: 20px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;`;

    const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

export default function Cart() {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state || {};
    const product = locationState.product;
    const selectedColor = locationState.selectedColor;
    const selectedSize = locationState.selectedSize;
    const [quantity, setQuantity] = useState(locationState.quantity || 1);
    const shippingCost = 20;
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Calculate the total price
    const totalPrice = product ? product.price * quantity : 0;

    // Calculate the subtotal
    const subtotal = totalPrice;

    // Define the shipping discount based on the subtotal
    const shippingDiscount = subtotal >= 50 ? -shippingCost : 0;

    // Calculate the total order amount
    const totalOrderAmount = subtotal + shippingCost + shippingDiscount;

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Tittle>YOUR BAG</Tittle>
                <Top>
                    <TopButton onClick={() => navigate('/ProductList', { state: {} })}>CONTINUE SHOPPING</TopButton>
                </Top>
                <Buttom>
                    <Info>
                        {product ? (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product:{product.title}</b></ProductName>
                                        <ProductColor color={selectedColor} />
                                        <ProductSize><b>{selectedSize}</b></ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove style={{cursor:'pointer'}} onClick={decreaseQuantity} />
                                        <ProductAmount>{quantity}</ProductAmount>
                                        <Add style={{cursor:'pointer'}} onClick={increaseQuantity} />
                                    </ProductAmountContainer>
                                    <ProductPrice>${totalPrice}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ) : (
                            <div>Product not found</div>
                        )}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>${subtotal}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping</SummaryItemText>
                            <SummaryItemPrice>${shippingCost}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>${shippingDiscount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type= "total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>${totalOrderAmount}</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                </Buttom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
