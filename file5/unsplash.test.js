import unsplash from "./unsplash";

import mockAxios from "axios";

it("call axios", async () => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: {
                results: ["cute.jpg"],
            },
        })
    );

    // work
    const res = await unsplash();

    // assertions / expects
    expect(res).toEqual(["cute.jpg"]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
        "https://api.unsplash.com/search/photos",
        {
            params: {
                client_id: "abc",
            },
        }
    );
});
