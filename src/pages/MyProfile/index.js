import React from "react";

import * as Section from "../../components/PageSection";
import User from "../../components/User/User";

export const MyProfile = () => (
    <div>
        <Section.Wrapper>
            <Section.Content>
                <User />
            </Section.Content>
        </Section.Wrapper>
    </div>
);
