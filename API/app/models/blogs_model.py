from pydantic import BaseModel

class Blog(BaseModel):
    title: str
    description: str
    img : str
    author : str

