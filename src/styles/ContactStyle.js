import styled from 'styled-components'

const CardStyled = {

  Card: styled.div`
    display: flex;
    flexDirection: column;
    flex-wrap: wrap;

    @media(max-width: 768px){
      flexDirection: row
    }
    `,

  itemCard: styled.div`
  margin: 10px;
  padding: 50px 0px;
  width: 300px;
  border: 1px solid black;
  background: #43C6AC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #191654, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #191654, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
  border-radius: 2px
  `,

  detailsCard: styled.small`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E3C230;
  margin: 5px 7px;
  font-weight: bold;
  }
  `
}



export default CardStyled;