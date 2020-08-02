import app from "../src/app";
import request = require('supertest');

describe("GET / - a simple api endpoint", () => {
    it("Hello API Request", (done) => {
        request(app)
            .get("/api/amz/test")
            .expect("Content-Type", /json/)
            .expect(200, done)
    });
});