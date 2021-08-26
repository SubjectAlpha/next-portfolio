import { Card, Container, Grid, Image } from "semantic-ui-react";

export default function Index(){
    return(
        <Container>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Card>
                            <Image src="/images/me.jpeg"/>
                            <Card.Content>
                                <Card.Header>Jacob Starr</Card.Header>
                                <Card.Description>
                                    Jacob is a full stack .Net developer, python enthusiast, and a node apprentice.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        
                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}