import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../features/fetchSlice";
import { Provider } from "react-redux";
import App from '../App'

const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/users/1',(req,res,ctx)=> {
        return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
    })
)

beforeAll(()=> server.listen())
afterEach(()=>{
    server.resetHandlers();
    cleanup()
})
afterAll(()=> server.close())

describe("", ()=> {
    let store;
    beforeEach(()=> {
        store = configureStore({ reducer: rootReducer })
    })

    it("", async ()=> {
        render(<Provider store={store}><App/></Provider>)
        userEvent.click(screen.getByText('Fetch API'))
        expect(screen.findByTestId("fetching-state")).not.toBeNull();
        expect(await screen.findByText("Bred dummy")).toBeInTheDocument();
    })
})