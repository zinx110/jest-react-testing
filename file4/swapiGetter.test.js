import swapiGetter from "./swapiGetter";

import mockAxios from "axios";

jest.mock("axios", () => ({
    __esModule: true,
    default: {
        get: jest.fn().mockResolvedValue({ data: { name: "Mock Jedi" } }),
    },
}));
// mockAxios.get.mockImplementation(() =>
//     Promise.resolve({ data: { name: "Mock Jedi" } })
// );
// mockAxios.get.mockResolvedValue({ data: { name: "Mock Jedi" } });

describe("swapiGetter", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should return a name", async () => {
        const result = await swapiGetter(1);
        console.log(result);
        expect(result).toBe("Mock Jedi");
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
    it("should return a name", async () => {
        const result = await swapiGetter(1);
        console.log(result);
        expect(result).toBe("Mock Jedi");
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});
