from fastapi import FastAPI

app = FastAPI(title="AlphaForge API")

@app.get("/")
def read_root():
    return {"status": "AlphaForge Engine Online"}
