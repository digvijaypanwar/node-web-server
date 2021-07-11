const request = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
        expect(true).toBe(true);
    });
    const app = require("../app");

    it("should send health back", (done) => {
        request(app)
            .get("/hc")
            .expect(200, (err, res) => {
                if (err) {
                    done();
                }
                expect(res.text.includes("Health")).toBe(true);
                done();
            });
    });
    it("should get main message", (done) => {
        request(app)
            .get("/")
            .expect(200, (err, res) => {
                expect(res.text.includes("Djay Node Server")).toBe(true);
                done();
            });
    });
});
