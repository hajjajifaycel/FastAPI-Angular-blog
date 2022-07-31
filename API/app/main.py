from fastapi import FastAPI
from routes.blogs_route import blog_api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(blog_api_router)


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
