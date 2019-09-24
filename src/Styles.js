import styled from 'styled-components'

const Styles = styled.div`
  form {
    width: 500px;
    margin: 40px auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    font-size: 15px;
    flex-flow: column nowrap;
    position: relative;
    & > i {
      top: -8px;
      right: -8px;
    }

    & > div {
      position: relative;
      display: flex;
      flex-flow: row wrap;
      margin: 0;
      padding: 8px;
      border-radius: 6px;
      &.active {
        background-color: lavender;
      }

      & > div {
        display: block;
        flex: 100%;
        &.radios {
          flex: 1;
        }
      }
      label {
        padding: 5px;
        display: block;
      }

      & > label {
        font-weight: bold;
        width: 100px;
        text-align: right;
        margin-right: 10px;
        padding: 7px 8px;
      }

      & > input,
      & > select,
      & > textarea {
        flex: 1;
      }

      & > span {
        color: #a00;
        font-weight: bold;
        margin-left: 5px;
        padding: 7px 8px;
      }
    }

    input,
    select,
    textarea {
      font-size: 1em;
      padding: 5px 8px;
      border-radius: 3px;
      border: 1px solid #ddd;
    }

    input[type='checkbox'] {
      margin-top: 10px;
    }

    button {
      padding: 8px 10px;
      color: white;
      font-weight: bold;
      font-size: 15px;
      border-radius: 5px;
      &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
      }
      &[type='submit'] {
        background-image: linear-gradient(#77e, #77c);
        width: 150px;
        margin: 15px auto 0px auto;
      }

      &.add {
        background-image: linear-gradient(#7e7, #7c7);
        width: 150px;
        margin: 15px auto 0px auto;
      }

      &.remove {
        background-image: linear-gradient(#e77, #c77);
      }
    }

    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
      & > i {
        top: 5px;
      }
    }
  }
`
export default Styles
