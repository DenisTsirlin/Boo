import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
height: 60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    `
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border: none;
`

const Center = styled.div`
  flex: 1;
    text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
cursor: pointer;
text-decoration: !important;
color: inherit !important;
`

const Right = styled.div`
  flex: 1;
 display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
    margin-left: 25px;
`


export default function Navbar() {

    const navigate = useNavigate(); 


    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'gray', fontSize: '16px' }} />
                    </SearchContainer>
                </Left>
                <Center>
                   
                    <Logo onClick={() => navigate('/')}>BOO</Logo>
                </Center>
                <Right>
                    <MenuItem onClick={() => navigate('/Register')}>REGISTER</MenuItem>
                    <MenuItem onClick={() => navigate('/Login')}>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary" >
                            <ShoppingCartOutlined  onClick={() => navigate('/Cart')}/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
